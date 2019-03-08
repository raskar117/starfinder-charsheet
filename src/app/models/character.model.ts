import { CharacterInformation } from './character-blocks/character-information.model';
import { Skill } from './character-blocks/skill.model';
import { Profession } from './character-blocks/profession.model';
import { HealthResolve } from './character-blocks/health-resolve.model';
import { StorageEntity } from './storage-entity.model';
import { Initiative } from './character-blocks/initiative.model';
import { ArmorClass } from './character-blocks/armor-class.model';
import { Ability } from './character-blocks/ability.model';
import { SavingThrow } from './character-blocks/saving-throw.model';

export class Character extends StorageEntity {
    public information: CharacterInformation;
    public description: string;
    public abilities: Array<Ability>;
    public skills: Array<Skill>;
    public initiative: Initiative;
    public healthResolve: HealthResolve;
    public armorClass: ArmorClass;
    public savingThrows: Array<SavingThrow>;
    public baseAttackBonus: number;
    public attackBonuses: any;
    public weapons: Array<any>;


    constructor(id: number, information: CharacterInformation, description: string, abilities: Array<Ability>, skills: Array<Skill>,
        initiative: Initiative, healthResolve: HealthResolve, armorClass: ArmorClass, savingThrows: Array<SavingThrow>, attackBonuses: any, weapons: Array<any>
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
