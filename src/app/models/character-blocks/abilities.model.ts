import { Ability } from './ability.model';

export class Abilities {
    public strength: Ability;
    public dexterity: Ability;
    public constitution: Ability;
    public intelligence: Ability;
    public wisdom: Ability;
    public charisma: Ability;

    constructor(strength: Ability, dexterity: Ability, constitution: Ability, intelligence: Ability, wisdom: Ability, charisma: Ability) {
        this.strength = new Ability(strength.score);
        this.dexterity = new Ability(dexterity.score);
        this.constitution = new Ability(constitution.score);
        this.intelligence = new Ability(intelligence.score);
        this.wisdom = new Ability(wisdom.score);
        this.charisma = new Ability(charisma.score);
    }

}
