-- CreateTable
CREATE TABLE `CharacterSkillHistory` (
    `characterId` INTEGER NOT NULL,
    `skillId` INTEGER NOT NULL,
    `skillStatus` ENUM('ACTIVE', 'INACTIVE', 'ACUIRED', 'AUGMENTED') NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`characterId`, `skillId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CharacterSkillHistory` ADD CONSTRAINT `CharacterSkillHistory_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterSkillHistory` ADD CONSTRAINT `CharacterSkillHistory_skillId_fkey` FOREIGN KEY (`skillId`) REFERENCES `Skill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
