import { Skill } from './skill.model';
import { Profession } from './profession.model';

export class Skills {
    public acrobatics: Skill;
    public athletics: Skill;
    public bluff: Skill;
    public computers: Skill;
    public culture: Skill;
    public diplomacy: Skill;
    public disguise: Skill;
    public engineering: Skill;
    public intimidate: Skill;
    public lifeScience: Skill;
    public medicine: Skill;
    public mysticism: Skill;
    public perception: Skill;
    public physicalScience: Skill;
    public piloting: Skill;
    public professions: Array<Profession>;
    public senseMotive: Skill;
    public sleightOfHand: Skill;
    public stealth: Skill;
    public survival: Skill;

    constructor(acrobatics: Skill, athletics: Skill, bluff: Skill, computers: Skill, culture: Skill,
        diplomacy: Skill, disguise: Skill, engineering: Skill, intimidate: Skill, lifeScience: Skill,
        medicine: Skill, mysticism: Skill, perception: Skill, physicalScience: Skill, piloting: Skill,
        professions: Array<Profession>, senseMotive: Skill, sleightOfHand: Skill, stealth: Skill, survival: Skill) {
        this.acrobatics = acrobatics;
        this.athletics = athletics;
        this.bluff = bluff;
        this.computers = computers;
        this.culture = culture;
        this.diplomacy = diplomacy;
        this.disguise = disguise;
        this.engineering = engineering;
        this.intimidate = intimidate;
        this.lifeScience = lifeScience;
        this.medicine = medicine;
        this.mysticism = mysticism;
        this.perception = perception;
        this.physicalScience = physicalScience;
        this.piloting = piloting;
        this.professions = professions;
        this.senseMotive = senseMotive;
        this.sleightOfHand = sleightOfHand;
        this.stealth = stealth;
        this.survival = survival;
    }
}
