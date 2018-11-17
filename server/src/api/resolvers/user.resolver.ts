import { ApolloError } from 'apollo-server';

import User from '../models/User.model';
import { encode } from '../../utils/auth';

export default {
  Query: {
    async me(_, {}, { user }) {
      return user.toGraph();
    },
  },
  Mutation: {
    async userCreate(_, { credentials }) {
      const user: any = await User.create(credentials);
      return {
        userId: user.id,
        token: encode({ userId: user.id }),
      };
    },
    async userLogin(_, { credentials: { username, password } }) {
      const user: any = await User.findOne({ username });
      if (!user) {
        throw new ApolloError('No user was found for the given email.');
      }
      const match = await user.comparePassword(password);
      if (!match) {
        throw new ApolloError('Password is incorrect.');
      }
      return {
        userId: user.id,
        token: encode({ userId: user.id }),
      };
    },
  },
};
