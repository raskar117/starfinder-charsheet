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
        this.acrobatics = this.newSkillFromSkill(acrobatics);
        this.athletics = this.newSkillFromSkill(athletics);
        this.bluff = this.newSkillFromSkill(bluff);
        this.computers = this.newSkillFromSkill(computers);
        this.culture = this.newSkillFromSkill(culture);
        this.diplomacy = this.newSkillFromSkill(diplomacy);
        this.disguise = this.newSkillFromSkill(disguise);
        this.engineering = this.newSkillFromSkill(engineering);
        this.intimidate = this.newSkillFromSkill(intimidate);
        this.lifeScience = this.newSkillFromSkill(lifeScience);
        this.medicine = this.newSkillFromSkill(medicine);
        this.mysticism = this.newSkillFromSkill(mysticism);
        this.perception = this.newSkillFromSkill(perception);
        this.physicalScience = this.newSkillFromSkill(physicalScience);
        this.piloting = this.newSkillFromSkill(piloting);
        this.professions = professions ? professions.map(prof => new Profession(prof.displayName, this.newSkillFromSkill(prof.skill))) : null;
        this.senseMotive = this.newSkillFromSkill(senseMotive);
        this.sleightOfHand = this.newSkillFromSkill(sleightOfHand);
        this.stealth = this.newSkillFromSkill(stealth);
        this.survival = this.newSkillFromSkill(survival);
    }

    private newSkillFromSkill(skill: Skill) {
        return new Skill(skill.ranks, skill.classBonus, skill.abilityModifier, skill.miscModifier);
    }
}
