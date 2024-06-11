import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => { return new PrismaClient() };

declare const globalThis: { prismaGlobal: ReturnType<typeof prismaClientSingleton> } & typeof global;

const appDB = globalThis.prismaGlobal ?? prismaClientSingleton()

export default appDB

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = appDB;
