import { ApolloError } from 'apollo-server';

import Pet from '../models/Pet.model';
import User from '../models/User.model';

export default {
  Query: {
    async myPet(_, {}, { user }) {
      const pet: any = await Pet.findOne({
        creatorId: user.id,
        active: true,
      });
      return pet ? pet.toGraph() : null;
    },
  },
  Mutation: {
    async petCreate(_, { data = {} }, { user }) {
      const count = await Pet.count({
        creatorId: user.id,
        active: true,
      });
      if (count) {
        throw new ApolloError('You already have a pet, be happy!');
      }
      const pet: any = await Pet.create({ ...data, creatorId: user.id });
      return pet.toGraph();
    },
  },
  Pet: {
    async creator({ creatorId }) {
      if (creatorId) {
        const creator: any = await User.findById(creatorId);
        return creator.toGraph();
      }
      return null;
    },
  },
};
