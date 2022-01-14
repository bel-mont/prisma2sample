import {INestApplication, Injectable, OnModuleInit} from '@nestjs/common';
import {Context, createContext, PrismaClient} from '@ggear/db'

@Injectable()
export class PrismaService implements OnModuleInit {
    private context: Context

    get ctx() {
        return this.context
    }

    get prisma(): PrismaClient {
        return this.context.prisma
    }

    async onModuleInit() {
        this.context = await createContext({})
    }

    async enableShutdownHooks(app: INestApplication) {
        this.context.prisma.$on('beforeExit', async () => {
            await app.close();
        });
    }
}
