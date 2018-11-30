import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { OfflineStorageService } from './offline-storage.service';

@Injectable()
export class CharacterService extends OfflineStorageService {
    private CHARACTERS_STORAGE_KEY = 'characters';

    constructor(
        storage: Storage
    ) {
        super(storage);
    }

    public getCharacters(): Observable<Array<Character>> {
        return this.getAll<Character>(this.CHARACTERS_STORAGE_KEY);
    }

    public getCharacterById(id: number): Observable<Character> {
        return this.getById<Character>(this.CHARACTERS_STORAGE_KEY, id);
    }

    public saveCharacter(character: Character): Observable<number> {
        return this.save(this.CHARACTERS_STORAGE_KEY, character);
    }

    public deleteCharacter(id: number) {
        return this.delete(this.CHARACTERS_STORAGE_KEY, id);
    }
}
