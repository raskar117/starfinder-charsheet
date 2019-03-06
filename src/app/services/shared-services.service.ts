import { Injectable } from '@angular/core';
import { Skills } from '../models/character-blocks/skills.model';
import { Profession } from '../models/character-blocks/profession.model';
import { HealthResolve, HealthResolvePoints } from '../models/character-blocks/health-resolve.model';
import { Character } from '../models/character.model';
import { Skill } from '../models/character-blocks/skill.model';
import { CharacterInformation } from '../models/character-blocks/character-information.model';
import { Abilities } from '../models/character-blocks/abilities.model';
import { Ability } from '../models/character-blocks/ability.model';
import { ArmorClass, ArmorClassPoints } from '../models/character-blocks/armor-class.model';
import { Initiative } from '../models/character-blocks/initiative.model';

@Injectable()
export class SharedServices {

    public generateNewCharacter(): Character {

        const emptySkill = new Skill(0, 0, 0, 0);
        const emptySkills = new Skills(emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, emptySkill,
            emptySkill, emptySkill, emptySkill, emptySkill, emptySkill, new Array<Profession>(), emptySkill, emptySkill, emptySkill, emptySkill);

        const emptyHealthResolvePoints = new HealthResolvePoints(0, 0);
        const emptyHealthResolve = new HealthResolve(emptyHealthResolvePoints, emptyHealthResolvePoints, emptyHealthResolvePoints);

        return new Character(
            null,
            new CharacterInformation('', null, 1, null, null, null, null, null, '', '', '', ''),
            '',
            new Abilities(new Ability(0), new Ability(0), new Ability(0), new Ability(0), new Ability(0), new Ability(0)),
            emptySkills,
            new Initiative(0, 0),
            emptyHealthResolve,
            new ArmorClass(new ArmorClassPoints(0, 0), new ArmorClassPoints(0, 0)),
            null,
            null,
            null
        );
    }
}
