import {Controller, Delete, Get, Logger, Post} from '@nestjs/common';
import {AppService} from './app.service';
import {PrismaService} from "./prisma.service";
import {CharacterStyle} from '@ggear/db'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly prisma: PrismaService) {
  }

  @Post()
  async getHello(): Promise<string> {
    try {
      // const typeL: CharacterStyle = CharacterStyle.RUSHDOWN
      await this.prisma.prisma.character.create({
        data: {
          name: 'Sol',
          style: CharacterStyle.RUSHDOWN
        }
      })
    } catch (err) {
      Logger.log('broken', err)
    }
    return this.appService.getHello();
  }

  @Delete()
  async delete(): Promise<string> {
    try {
      await this.prisma.prisma.character.deleteMany({
        where: {
          name: 'Sol'
        }
      })
    } catch (err) {
      Logger.log('broken', err)
    }
    return 'deleted'
  }
}
