import {
  Prisma,
  UserWhereUniqueInput,
  TimelineWhereUniqueInput
} from '../generated/prisma';

import { User, Timeline } from '../generated/prisma';

export async function canWriteToTimeline(
  db: Prisma,
  user: UserWhereUniqueInput,
  timeline: TimelineWhereUniqueInput
) {
  return await db.exists.User({
    id: user.id,
    timeline: { id: timeline.id }
  });
}
