import { merge } from 'lodash';

import userResolver from './user.resolver';

export default merge(userResolver, {}) as any;
