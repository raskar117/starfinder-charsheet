import { Ability } from './ability.model';

export class Abilities {
    public strength: Ability;
    public dexterity: Ability;
    public constitution: Ability;
    public intelligence: Ability;
    public wisdom: Ability;
    public charisma: Ability;

    constructor(strength: Ability, dexterity: Ability, constitution: Ability, intelligence: Ability, wisdom: Ability, charisma: Ability) {
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
    }

}
