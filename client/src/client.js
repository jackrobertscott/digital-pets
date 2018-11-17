import ApolloClient from 'apollo-boost';

import auth from './utils/auth';
import config from './config';

const authenticateRequests = operation => {
  const token = auth.token();
  operation.setContext({
    headers: {
      authorization: token || '',
    },
  });
};

export default new ApolloClient({
  uri: config.urls.api,
  request: authenticateRequests,
});
