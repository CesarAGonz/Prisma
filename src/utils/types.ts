import { Prisma, prisma } from "../generated/prisma-client";

export interface Context {
  prisma: Prisma;
  request: any;
  user: any;
}