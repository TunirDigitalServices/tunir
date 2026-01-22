import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  log: ["query", "warn", "error"],
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  }),
});

export default prisma;
