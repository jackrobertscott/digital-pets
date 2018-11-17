import dotenvSafe from 'dotenv-safe';
import dotenv from 'dotenv';

dotenvSafe.config({
  allowEmptyValues: true,
});
dotenv.config();

/**
 * Replace these variables with environment variables
 * so that it reduces friction.
 */
export default {
  environment: process.env.NODE_ENV || 'development',
  production: process.env.NODE_ENV === 'production',
  mongodb: {
    uri: process.env.MONGODB_URI as string,
  },
  token: {
    secret: process.env.SUPER_SECRET_TOKEN as string,
  },
};
