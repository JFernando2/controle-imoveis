import { PrismaClient } from '../generated/prisma';

// Evitar múltiplas instâncias do Prisma Client em desenvolvimento
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = db;
} 