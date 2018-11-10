export class Skill {
    public ranks: number;
    public classBonus: number;
    public abilityModifier: number;
    public miscModifier: number;

    constructor(ranks: number, classBonus: number, abilityModifier: number, miscModifier: number) {
        this.ranks = ranks;
        this.classBonus = classBonus;
        this.abilityModifier = abilityModifier;
        this.miscModifier = miscModifier;
    }

    public get total(): number {
        return this.ranks + this.classBonus + this.abilityModifier + this.miscModifier;
    }
}
