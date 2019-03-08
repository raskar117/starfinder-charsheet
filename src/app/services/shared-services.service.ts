import { Injectable } from '@angular/core';
import { HealthResolve, HealthResolvePoints } from '../models/character-blocks/health-resolve.model';
import { Character } from '../models/character.model';
import { Skill } from '../models/character-blocks/skill.model';
import { CharacterInformation } from '../models/character-blocks/character-information.model';
import { Ability } from '../models/character-blocks/ability.model';
import { ArmorClass, ArmorClassPoints } from '../models/character-blocks/armor-class.model';
import { Initiative } from '../models/character-blocks/initiative.model';
import { AbilityKey } from '../enums/ability-key.enum';
import { SKILL_ABILITY_MAPPING, SAVING_THROW_ABILITY_MAPPING } from '../constants/character-sheet.constants';
import { ClassType } from '../enums/class-type.enum';
import { RaceType } from '../enums/race-type.enum';
import { SavingThrow } from '../models/character-blocks/saving-throw.model';

@Injectable()
export class SharedServices {
    private emptyAbilities: Array<Ability>;
    private emptySkills: Array<Skill>;
    private emptySavingThrows: Array<SavingThrow>;

    constructor() {
        this.emptyAbilities = Object.keys(AbilityKey).map(abilityKey => new Ability(AbilityKey[abilityKey], 0));
        this.emptySkills = SKILL_ABILITY_MAPPING.map(key => new Skill(key.skill, key.ability, 0, 0, 0));
        this.emptySavingThrows = SAVING_THROW_ABILITY_MAPPING.map(key => new SavingThrow(key.savingThrow, key.ability, 0, 0));
    }

    public generateNewCharacter(): Character {
        const emptyHealthResolvePoints = new HealthResolvePoints(0, 0);
        const emptyHealthResolve = new HealthResolve(emptyHealthResolvePoints, emptyHealthResolvePoints, emptyHealthResolvePoints);

        return new Character(
            null,
            new CharacterInformation('Elliad', ClassType.OPERATIVE, 1, RaceType.KASATHAS, null, null, null, null, '', '', '', ''),
            '',
            this.instanciateAbilities(),
            this.instanciateSkills(),
            new Initiative(0, 0),
            emptyHealthResolve,
            new ArmorClass(new ArmorClassPoints(0, 0), new ArmorClassPoints(0, 0)),
            this.instanciateSavingThrows(),
            null,
            null
        );
    }

    public instanciateCharacterFromSavedCharacter(char: Character): Character {
        return new Character(
            char.id,
            char.information,
            char.description,
            this.instanciateAbilities(char.abilities),
            this.instanciateSkills(char.skills),
            char.initiative ? new Initiative(
                char.initiative.dexModifier,
                char.initiative.miscModifier
            ) : null,
            char.healthResolve ? new HealthResolve(
                char.healthResolve.stamina,
                char.healthResolve.hit,
                char.healthResolve.resolve
            ) : null,
            char.armorClass ? new ArmorClass(
                new ArmorClassPoints(char.armorClass.energyArmorClass.armorBonus, char.armorClass.energyArmorClass.miscModifier),
                new ArmorClassPoints(char.armorClass.kineticArmorClass.armorBonus, char.armorClass.kineticArmorClass.miscModifier)
            ) : null,
            this.instanciateSavingThrows(char.savingThrows),
            char.attackBonuses,
            char.weapons
        );
    }

    private instanciateAbilities(abilities?: Array<Ability>): Array<Ability> {
        if (abilities) {
            return abilities.map(ability => new Ability(ability.key, ability.score));
        } else {
            return this.emptyAbilities;
        }
    }

    private instanciateSkills(skills?: Array<Skill>): Array<Skill> {
        if (skills) {
            return skills.map(skill => new Skill(skill.key, skill.ability, skill.ranks, skill.classBonus, skill.miscModifier));
        } else {
            return this.emptySkills;
        }
    }

    private instanciateSavingThrows(savingThrow?: Array<SavingThrow>): Array<SavingThrow> {
        if (savingThrow) {
            return savingThrow.map(st => new SavingThrow(st.key, st.abilityKey, st.baseSave, st.miscModifier));
        } else {
            return this.emptySavingThrows;
        }
    }
}
