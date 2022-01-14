import {PrismaClient} from '@prisma/client'

export class SkillSeed {
  static async run(prisma: PrismaClient): Promise<void> {
    await prisma.skill.upsert({
      where: { id: 1},
      update: {},
      create: {
        name: 'One',
      }
    })
    await prisma.skill.upsert({
      where: { id: 2 },
      update: {},
      create: {
        name: 'Two',
      }
    })
  }
}
