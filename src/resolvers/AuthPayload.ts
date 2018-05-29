import Context from '../common/context';

export const AuthPayload = {
  user: async ({ user: { id } }, args, ctx: Context, info) => {
    return ctx.db.query.user({ where: { id } }, info);
  }
};
