import {PrismaClient} from "@prisma/client";

export function createContext(ctx: any): Promise<Context>;

/**
 * Need to export all the prisma generated types, so we can reuse them across our backend projects.
 */
export * from ".prisma/client/index.d";

export const enum CharacterStyle {
    RUSHDOWN= 'RUSHDOWN',
    PUPPET = 'PUPPET',
    ZONER = 'ZONER',
    GRAPPLER = 'GRAPPLER'
};

export interface Context {
    prisma: PrismaClient;
}