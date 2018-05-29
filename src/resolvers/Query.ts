import Context from '../common/context';
import { getUserId } from '../common/auth';

export const Query = {
  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  }
};
