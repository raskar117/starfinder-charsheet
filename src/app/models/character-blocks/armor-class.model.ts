import { ARMOR_CLASS_BASE, AC_VS_COMBAT_MANEUVERS_BASE } from '../../constants/character-sheet.constants';
export class ArmorClassPoints {
    armorBonus: number;
    miscModifier: number;

    constructor(armorBonus: number, miscModifier: number) {
        this.armorBonus = armorBonus;
        this.miscModifier = miscModifier;
    }

    public getTotal(dexModifier: number): number {
        return ARMOR_CLASS_BASE + this.armorBonus + dexModifier + this.miscModifier;
    }
}

export class ArmorClass {
    energyArmorClass: ArmorClassPoints;
    kineticArmorClass: ArmorClassPoints;

    constructor(energyArmorClass: ArmorClassPoints, kineticArmorClass: ArmorClassPoints) {
        this.energyArmorClass = energyArmorClass;
        this.kineticArmorClass = kineticArmorClass;
    }

    public getAcVsCombatManeuvers(dexModifier: number): number {
        return this.kineticArmorClass ? AC_VS_COMBAT_MANEUVERS_BASE + this.kineticArmorClass.getTotal(dexModifier) : AC_VS_COMBAT_MANEUVERS_BASE;
    }
}
