import {PrismaClient} from "@prisma/client";
import {Context} from "./types";

const prisma = new PrismaClient();

export const createContext = async (ctx: any): Promise<Context> => {
    return {...ctx, prisma};
};