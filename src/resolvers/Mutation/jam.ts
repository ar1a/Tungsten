import {
  Context,
  AuthError,
  canWriteTimeline,
  checkIsoDate,
  getUserId
} from '../../common';
import { Recipe, Timeline } from '../../generated/prisma';

interface CJArgs {
  timeline: Timeline;
  date: string;
  recipe: Recipe;
}

export async function createJam(
  parent,
  { timeline, date, recipe }: CJArgs,
  ctx: Context,
  info
) {
  if (!(await canWriteTimeline(ctx.db, { id: getUserId(ctx) }, timeline))) {
    throw new AuthError();
  }

  if (!checkIsoDate(date)) {
    throw new TypeError('date must be YYYY-MM-DD');
  }

  const result = await ctx.db.mutation.createEvent({
    data: {
      timeline: { connect: { id: timeline.id } },
      date,
      jam: { create: { recipe: { connect: { id: recipe.id } } } }
    }
  });

  await ctx.db.mutation.updateTimeline({
    where: { id: timeline.id },
    data: {
      events: { connect: { id: result.id } }
    }
  });

  return result;
}
