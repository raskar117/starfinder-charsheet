import { SkillKey } from '../../enums/skill-key.enum';
import { AbilityKey } from '../../enums/ability-key.enum';
export class Skill {
    public key: SkillKey;
    public ability: AbilityKey;
    public ranks: number;
    public classBonus: number;
    public miscModifier: number;

    constructor(key: SkillKey, ability: AbilityKey, ranks: number, classBonus: number, miscModifier: number) {
        this.key = key;
        this.ability = ability;
        this.ranks = ranks;
        this.classBonus = classBonus;
        this.miscModifier = miscModifier;
    }

    public getTotal(abilityModifier: number): number {
        return this.ranks + this.classBonus + abilityModifier + this.miscModifier;
    }
}
