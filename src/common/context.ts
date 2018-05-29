import { Prisma } from '../generated/prisma';

export default interface Context {
  db: Prisma;
  request: any;
}
