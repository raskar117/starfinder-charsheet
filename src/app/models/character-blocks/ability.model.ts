import { AbilityKey } from '../../enums/ability-key.enum';
import { ABILITY_MODIFIER_CALC_BASE } from '../../constants/character-sheet.constants';
export class Ability {
    public key: AbilityKey;
    public score: number;

    constructor(key: AbilityKey, score: number) {
        this.key = key;
        this.score = score;
    }

    public get modifier(): number {
        const modifier = Math.floor((this.score - ABILITY_MODIFIER_CALC_BASE) / 2);
        return modifier > 0 ? modifier : 0;
    }
}
