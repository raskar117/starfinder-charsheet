import { AbilityKey } from '../../enums/ability-key.enum';
import { SavingThrowKey } from '../../enums/saving-throw-key.enum';

export class SavingThrow {
    key: SavingThrowKey;
    abilityKey: AbilityKey;
    baseSave: number;
    miscModifier: number;

    constructor(key: SavingThrowKey, abilityKey: AbilityKey, baseSave: number, miscModifier: number) {
        this.key = key;
        this.abilityKey = abilityKey;
        this.baseSave = baseSave;
        this.miscModifier = miscModifier;
    }

    public getTotal(abilityModifier: number) {
        return this.baseSave + abilityModifier + this.miscModifier;
    }
}
