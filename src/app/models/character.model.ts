import { Skills } from './character-blocks/skills.model';
import { CharacterInformation } from './character-blocks/character-information.model';
import { Abilities } from './character-blocks/abilities.model';
import { Skill } from './character-blocks/skill.model';
import { Profession } from './character-blocks/profession.model';
import { HealthResolve, HealthResolvePoints } from './character-blocks/health-resolve.model';
import { StorageEntity } from './storage-entity.model';

export class Character extends StorageEntity {
    public information: CharacterInformation;
    public description: string;
    public abilities: Abilities;
    public skills: Skills;
    public initiative: any;
    public healthResolve: HealthResolve;
    public armorClass: any;
    public savingThrows: any;
    public attackBonuses: any;
    public weapons: Array<any>;


    constructor(id: number, information: CharacterInformation, description: string, abilities: Abilities, skills: Skills,
        initiative: any, healthResolve: HealthResolve, armorClass: any, savingThrows: any, attackBonuses: any, weapons: Array<any>
    ) {
        super(id);
        this.information = information;
        this.description = description;
        this.abilities = abilities;
        this.skills = skills ? skills : this.emptySkills;
        this.initiative = initiative;
        this.healthResolve = healthResolve ? healthResolve : this.emptyHealthResolve;
        this.armorClass = armorClass;
        this.savingThrows = savingThrows;
        this.attackBonuses = attackBonuses;
        this.weapons = weapons;
    }

    private get emptySkills(): Skills {
        const emptySkill = new Skill(0, 0, 0, 0);
        return new Skills(emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill,
            emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, new Array<Profession>(), emptySkill, emptySkill, emptySkill, emptySkill);
    }

    private get emptyHealthResolve(): HealthResolve {
        const emptyHealthResolve = new HealthResolvePoints(0, 0);
        return new HealthResolve(emptyHealthResolve, emptyHealthResolve, emptyHealthResolve);
    }
}
