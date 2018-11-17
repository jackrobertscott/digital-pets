import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import config from './config';
import { decode } from './utils/auth';
import { errorHandler } from './utils/errors';
import typeDefs from './api/typedefs';
import resolvers from './api/resolvers';
import User from './api/models/User.model';

console.log(config.mongodb.uri);

/**
 * Connect to the mongodb database using
 * the mongoose library.
 */
mongoose.connect(
  config.mongodb.uri,
  { useNewUrlParser: true }
);
mongoose.connection.on('error', error => {
  throw error;
});

/**
 * Declare the schema which the will hold our
 * GraphQL types and resolvers.
 */
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});

/**
 * Create the server which we will send our
 * GraphQL queries to.
 */
const server = new ApolloServer({
  schema,
  formatError: errorHandler,
  async context({ req }) {
    const token = req && req.headers && req.headers.authorization;
    if (token) {
      const data = decode(token) as { userId: string };
      const user = data.userId ? await User.findById(data.userId) : null;
      return { user };
    }
  },
});

/**
 * Turn the server on by listening to a port
 * Defaults to: http://localhost:4000
 */
server.listen().then(({ url }) => {
  console.log(`🦁 🐼 🐓 Serving up some pets at ${url}`);
});
