import { Context, getUserId } from '../../utils';
export const recipe = {
  async createRecipe(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    const recipe = await ctx.db.mutation.createRecipe({
      data: {
        name: args.name,
        yield: args.yield,
        equipment: args.equipment,
        ingredients: args.ingredients
      }
    });
    await ctx.db.mutation.updateUser({
      where: {
        id
      },
      data: {
        timeline: {
          update: {
            recipes: {
              connect: {
                id: recipe.id
              }
            }
          }
        }
      }
    });
    return recipe;
  }
};
