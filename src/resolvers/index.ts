import { Query } from './Query';
import { auth } from './Mutation/auth';
import { recipe } from './Mutation/recipe';
import { AuthPayload } from './AuthPayload';

export default {
  Query,
  Mutation: {
    ...auth,
    ...recipe
  },
  AuthPayload
};
