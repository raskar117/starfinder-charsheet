import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { OfflineStorageService } from './offline-storage.service';
import { SharedServices } from './shared-services.service';

@Injectable()
export class CharacterService extends OfflineStorageService {
    private CHARACTERS_STORAGE_KEY = 'characters';

    constructor(
        storage: Storage,
        private sharedServices: SharedServices
    ) {
        super(storage);
    }

    public getCharacters(): Observable<Array<Character>> {
        return new Observable(observer => {
            this.getAll<Character>(this.CHARACTERS_STORAGE_KEY).subscribe((characters) => {
                if (characters) {
                    observer.next(characters.map(char => this.sharedServices.instanciateCharacterFromSavedCharacter(char)));
                }
                observer.complete();
            });
        });
    }

    public getCharacterById(id: number): Observable<Character> {
        return new Observable(observer => {
            this.getById<Character>(this.CHARACTERS_STORAGE_KEY, id).subscribe((character) => {
                if (character) {
                    observer.next(this.sharedServices.instanciateCharacterFromSavedCharacter(character));
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

}
