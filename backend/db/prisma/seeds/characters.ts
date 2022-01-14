import {PrismaClient} from '@prisma/client'
import {CharacterStyle} from "../../dist";

export class CharacterSeed {
  static async run(prisma: PrismaClient): Promise<void> {
    const zato = await prisma.character.upsert({
      where: {name: 'Zato-1'},
      update: {},
      create: {
        name: 'Zato-1',
        style: CharacterStyle.PUPPET
      },
    })
    const ky = await prisma.character.upsert({
      where: {name: 'Ky Kiske'},
      update: {},
      create: {
        name: 'Ky Kiske',
        style: CharacterStyle.RUSHDOWN
      },
    })
    console.log({zato, ky})
  }
}
