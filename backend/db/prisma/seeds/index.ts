import {PrismaClient} from '@prisma/client'
import {CharacterSeed} from "./characters";
import {SkillSeed} from "./skills";

class DbSeed {
  static async seed(): Promise<void> {
    const prisma = new PrismaClient()
    try {
      await CharacterSeed.run(prisma)
      await SkillSeed.run((prisma))
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
    await prisma.$disconnect()
  }
}

DbSeed.seed().finally(() => {
  console.log('Seeding Finished')
})