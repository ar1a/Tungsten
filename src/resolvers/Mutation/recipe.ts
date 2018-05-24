import { Context, getUserId } from '../../utils';
export const recipe = {
  async createRecipe(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.mutation.updateUser({
      where: {
        id
      },
      data: {
        timeline: {
          update: {
            recipes: {
              create: {
                name: args.name,
                yield: args.yield,
                equipment: args.equipment,
                ingredients: args.ingredients
              }
            }
          }
        }
      }
    });
  }
};
