// lib/prisma.ts
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// Use `new PrismaPg()` here
const prismaAdapter = new PrismaPg({
  url: process.env.DATABASE_URL!, // make sure this exists
});

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: prismaAdapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
