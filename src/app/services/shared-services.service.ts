import { Injectable } from '@angular/core';
import { HealthResolve, HealthResolvePoints } from '../models/character-blocks/health-resolve.model';
import { Character } from '../models/character.model';
import { Skill } from '../models/character-blocks/skill.model';
import { CharacterInformation } from '../models/character-blocks/character-information.model';
import { Ability } from '../models/character-blocks/ability.model';
import { ArmorClass, ArmorClassPoints } from '../models/character-blocks/armor-class.model';
import { Initiative } from '../models/character-blocks/initiative.model';
import { AbilityKey } from '../enums/ability-key.enum';
import { SKILL_ABILITY_MAPPING } from '../constants/character-sheet.constants';
import { ClassType } from '../enums/class-type.enum';
import { RaceType } from '../enums/race-type.enum';

@Injectable()
export class SharedServices {

    public generateNewCharacter(): Character {
        const emptySkills = SKILL_ABILITY_MAPPING.map(key => new Skill(key.skill, key.ability, 0, 0, 0));
        const emptyHealthResolvePoints = new HealthResolvePoints(0, 0);
        const emptyHealthResolve = new HealthResolve(emptyHealthResolvePoints, emptyHealthResolvePoints, emptyHealthResolvePoints);

        return new Character(
            null,
            new CharacterInformation('Elliad', ClassType.OPERATIVE, 1, RaceType.KASATHAS, null, null, null, null, '', '', '', ''),
            '',
            Object.keys(AbilityKey).map(abilityKey => new Ability(AbilityKey[abilityKey], 0)),
            emptySkills,
            new Initiative(0, 0),
            emptyHealthResolve,
            new ArmorClass(new ArmorClassPoints(0, 0), new ArmorClassPoints(0, 0)),
            null,
            null,
            null
        );
    }

    public instanciateCharacterFromSavedCharacter(char: Character): Character {
        return new Character(
            char.id,
            char.information,
            char.description,
            char.abilities ? char.abilities.map(ability => new Ability(ability.key, ability.score))
                : Object.keys(AbilityKey).map(abilityKey => new Ability(AbilityKey[abilityKey], 0)),
            char.skills ? char.skills.map(skill => new Skill(skill.key, skill.ability, skill.ranks, skill.classBonus, skill.miscModifier))
                : SKILL_ABILITY_MAPPING.map(key => new Skill(key.skill, key.ability, 0, 0, 0)),
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
            char.savingThrows,
            char.attackBonuses,
            char.weapons
        );
    }
}
