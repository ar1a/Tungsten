import { Query } from './Query';
import { auth } from './Mutation/auth';
import { createJam } from './Mutation/jam';
import { recipe } from './Mutation/recipe';
import { AuthPayload } from './AuthPayload';

export default {
  Query,
  Mutation: {
    ...auth,
    ...recipe,
    createJam
  },
  AuthPayload
};
