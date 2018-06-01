import {
  Prisma,
  UserWhereUniqueInput,
  TimelineWhereUniqueInput,
  RecipeWhereUniqueInput
} from '../generated/prisma';

import { User, Timeline } from '../generated/prisma';

export function canWriteTimeline(
  db: Prisma,
  user: UserWhereUniqueInput,
  timeline: TimelineWhereUniqueInput
) {
  return db.exists.User({
    id: user.id,
    timeline: { id: timeline.id }
  });
}

export function canWriteRecipe(
  db: Prisma,
  user: UserWhereUniqueInput,
  recipe: RecipeWhereUniqueInput
) {
  return db.exists.User({
    id: user.id,
    timeline: { recipes_some: { id: recipe.id } }
  });
}

export function canReadRecipe(
  db: Prisma,
  user: UserWhereUniqueInput,
  recipe: RecipeWhereUniqueInput
) {
  return canWriteRecipe(db, user, recipe);
}
