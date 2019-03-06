import { Skills } from './character-blocks/skills.model';
import { CharacterInformation } from './character-blocks/character-information.model';
import { Abilities } from './character-blocks/abilities.model';
import { Skill } from './character-blocks/skill.model';
import { Profession } from './character-blocks/profession.model';
import { HealthResolve, HealthResolvePoints } from './character-blocks/health-resolve.model';
import { StorageEntity } from './storage-entity.model';
import { Initiative } from './character-blocks/initiative.model';
import { ArmorClass, ArmorClassPoints } from './character-blocks/armor-class.model';
import { ARMOR_CLASS_BASE } from '../constants/character-sheet.constants';

export class Character extends StorageEntity {
    public information: CharacterInformation;
    public description: string;
    public abilities: Abilities;
    public skills: Skills;
    public initiative: Initiative;
    public healthResolve: HealthResolve;
    public armorClass: ArmorClass;
    public savingThrows: any;
    public baseAttackBonus: number;
    public attackBonuses: any;
    public weapons: Array<any>;


    constructor(id: number, information: CharacterInformation, description: string, abilities: Abilities, skills: Skills,
        initiative: Initiative, healthResolve: HealthResolve, armorClass: ArmorClass, savingThrows: any, attackBonuses: any, weapons: Array<any>
    ) {
        super(id);
        this.information = information;
        this.description = description;
        this.abilities = abilities;
        this.skills = skills;
        this.initiative = initiative;
        this.healthResolve = healthResolve;
        this.armorClass = armorClass;
        this.savingThrows = savingThrows;
        this.attackBonuses = attackBonuses;
        this.weapons = weapons;
    }
}
