import Context from '../../common/context';
import { getUserId } from '../../common/auth';

export const recipe = {
  async createRecipe(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    const recipe = await ctx.db.mutation.createRecipe(
      {
        data: {
          name: args.name,
          yield: args.yield,
          equipment: args.equipment,
          ingredients: args.ingredients
        }
      },
      info
    );
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
  },

  async updateRecipe(parent, { data, id }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const recipeExists = await ctx.db.exists.User({
      timeline: {
        recipes_some: {
          id
        }
      },
      id: userId
    });
    if (!recipeExists) {
      throw new Error('Recipe does not exist!');
    }
    return ctx.db.mutation.updateRecipe(
      {
        where: {
          id
        },
        data
      },
      info
    );
  },

  async deleteRecipe(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const recipeExists = await ctx.db.exists.User({
      timeline: {
        recipes_some: {
          id
        }
      },
      id: userId
    });
    if (!recipeExists) return null;
    return ctx.db.mutation.deleteRecipe({
      where: { id }
    });
  }
};
