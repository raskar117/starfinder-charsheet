import { Skills } from './character-blocks/skills.model';
import { CharacterInformation } from './character-blocks/character-information.model';
import { Abilities } from './character-blocks/abilities.model';
import { Skill } from './character-blocks/skill.model';
import { Profession } from './character-blocks/profession.model';

export class Character {
    public information: CharacterInformation;
    public description: string;
    public abilities: Abilities;
    public skills: Skills;
    public initiative: any;
    public health: any;
    public armorClass: any;
    public savingThrows: any;
    public attackBonuses: any;
    public weapons: Array<any>;


    constructor(information: CharacterInformation, description: string, abilities: Abilities, skills: Skills,
        initiative: any, health: any, armorClass: any, savingThrows: any, attackBonuses: any, weapons: Array<any>) {
        this.information = information;
        this.description = description;
        this.abilities = abilities;
        this.skills = skills ? skills : this.initializeSkills();
        this.initiative = initiative;
        this.health = health;
        this.armorClass = armorClass;
        this.savingThrows = savingThrows;
        this.attackBonuses = attackBonuses;
        this.weapons = weapons;
    }

    private initializeSkills(): Skills {
        const emptySkill = new Skill(0, 0, 0, 0);
        return new Skills(emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill,
            emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, new Array<Profession>(), emptySkill, emptySkill, emptySkill, emptySkill);
    }
}
