import { merge } from 'lodash';

import userResolver from './user.resolver';
import petResolver from './pet.resolver';

export default merge(userResolver, petResolver) as any;
