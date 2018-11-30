import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { StorageEntity } from '../models/storage-entity.model';

@Injectable()
export class OfflineStorageService {

    constructor(
        private storage: Storage
    ) {}

    protected getAll<T extends StorageEntity>(storageKey: string): Observable<Array<T>> {
        return from(this.storage.get(storageKey));
    }

    protected getById<T extends StorageEntity>(storageKey: string, id: number): Observable<T> {
        return from(this.storage.get(storageKey).then((entities: Array<T>) => {
            return entities.find(entity => entity.id === id);
        }));
    }

    protected save<T extends StorageEntity>(storageKey: string, entity: T): Observable<number> {
        return new Observable((observer) => {
            this.getAll<T>(storageKey).subscribe(entities => {
                if (!entities) {
                    entities = new Array<T>();
                }
                if (!isNullOrUndefined(entity.id)) {
                    entities.splice(entities.findIndex(ent => ent.id === entity.id), 1, entity);
                } else {
                    entity.id = entities.length;
                    entities.push(entity);
                }
                this.storage.set(storageKey, entities).then(() => {
                    observer.next(entity.id);
                    observer.complete();
                });
            });
        });
    }

    protected delete<T extends StorageEntity>(storageKey: string, id: number): Observable<any> {
        return new Observable((observer) => {
            this.getAll<T>(storageKey).subscribe(entities => {
                entities.splice(entities.findIndex(ent => ent.id === id), 1);
                this.storage.set(storageKey, entities).then(() => {
                    observer.next();
                    observer.complete();
                });
            });
        });
    }
}
