import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { OfflineStorageService } from './offline-storage.service';
import { Initiative } from '../models/character-blocks/initiative.model';
import { HealthResolve } from '../models/character-blocks/health-resolve.model';
import { Skills } from '../models/character-blocks/skills.model';
import { Abilities } from '../models/character-blocks/abilities.model';
import { ArmorClass, ArmorClassPoints } from '../models/character-blocks/armor-class.model';

@Injectable()
export class CharacterService extends OfflineStorageService {
    private CHARACTERS_STORAGE_KEY = 'characters';

    constructor(
        storage: Storage
    ) {
        super(storage);
    }

    public getCharacters(): Observable<Array<Character>> {
        return new Observable(observer => {
            this.getAll<Character>(this.CHARACTERS_STORAGE_KEY).subscribe((characters) => {
                if (characters) {
                    observer.next(characters.map(char => this.convertToCharacterModel(char)));
                }
                observer.complete();
            });
        });
    }

    public getCharacterById(id: number): Observable<Character> {
        return new Observable(observer => {
            this.getById<Character>(this.CHARACTERS_STORAGE_KEY, id).subscribe((character) => {
                if (character) {
                    observer.next(this.convertToCharacterModel(character));
                }
                observer.complete();
            });
        });
    }

    public saveCharacter(character: Character): Observable<number> {
        return this.save(this.CHARACTERS_STORAGE_KEY, character);
    }

    public deleteCharacter(id: number) {
        return this.delete(this.CHARACTERS_STORAGE_KEY, id);
    }

    private convertToCharacterModel(char: Character): Character {
        return new Character(
            char.id,
            char.information,
            char.description,
            char.abilities ? new Abilities(
                char.abilities.strength,
                char.abilities.dexterity,
                char.abilities.constitution,
                char.abilities.intelligence,
                char.abilities.wisdom,
                char.abilities.charisma
            ) : null,
            char.skills ? new Skills(
                char.skills.acrobatics,
                char.skills.acrobatics,
                char.skills.bluff,
                char.skills.computers,
                char.skills.culture,
                char.skills.diplomacy,
                char.skills.disguise,
                char.skills.engineering,
                char.skills.intimidate,
                char.skills.lifeScience,
                char.skills.medicine,
                char.skills.mysticism,
                char.skills.perception,
                char.skills.physicalScience,
                char.skills.piloting,
                char.skills.professions,
                char.skills.senseMotive,
                char.skills.sleightOfHand,
                char.skills.stealth,
                char.skills.survival
            ) : null,
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
