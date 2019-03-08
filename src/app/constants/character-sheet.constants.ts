import { SkillKey } from '../enums/skill-key.enum';
import { AbilityKey } from '../enums/ability-key.enum';
import { SavingThrowKey } from '../enums/saving-throw-key.enum';

export const ABILITY_MODIFIER_CALC_BASE = 10;
export const ARMOR_CLASS_BASE = 10;
export const AC_VS_COMBAT_MANEUVERS_BASE = 8;

export const SKILL_ABILITY_MAPPING = [
    { skill: SkillKey.ACROBATICS, ability: AbilityKey.DEXTERITY },
    { skill: SkillKey.ATHLETICS, ability: AbilityKey.STRENGTH },
    { skill: SkillKey.BLUFF, ability: AbilityKey.CHARISMA },
    { skill: SkillKey.COMPUTERS, ability: AbilityKey.INTELLIGENCE },
    { skill: SkillKey.CULTURE, ability: AbilityKey.INTELLIGENCE },
    { skill: SkillKey.DIPLOMACY, ability: AbilityKey.CHARISMA },
    { skill: SkillKey.DISGUISE, ability: AbilityKey.CHARISMA },
    { skill: SkillKey.ENGINEERING, ability: AbilityKey.INTELLIGENCE },
    { skill: SkillKey.INTIMIDATE, ability: AbilityKey.CHARISMA },
    { skill: SkillKey.LIFESCIENCE, ability: AbilityKey.INTELLIGENCE },
    { skill: SkillKey.MEDICINE, ability: AbilityKey.INTELLIGENCE },
    { skill: SkillKey.MYSTICISM, ability: AbilityKey.WISDOM },
    { skill: SkillKey.PERCEPTION, ability: AbilityKey.WISDOM },
    { skill: SkillKey.PHYSICALSCIENCE, ability: AbilityKey.INTELLIGENCE },
    { skill: SkillKey.PILOTING, ability: AbilityKey.DEXTERITY },
    { skill: SkillKey.SENSEMOTIVE, ability: AbilityKey.WISDOM },
    { skill: SkillKey.SLEIGHTOFHAND, ability: AbilityKey.DEXTERITY },
    { skill: SkillKey.STEALTH, ability: AbilityKey.DEXTERITY },
    { skill: SkillKey.SURVIVAL, ability: AbilityKey.WISDOM },
];

export const SAVING_THROW_ABILITY_MAPPING = [
    { savingThrow: SavingThrowKey.FORTITUDE, ability: AbilityKey.CONSTITUTION },
    { savingThrow: SavingThrowKey.REFLEX, ability: AbilityKey.DEXTERITY },
    { savingThrow: SavingThrowKey.WILL, ability: AbilityKey.WISDOM },
];

