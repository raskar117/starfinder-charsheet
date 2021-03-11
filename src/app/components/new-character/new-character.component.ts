import { ClassType } from './../../enums/class-type.enum';
import { Nav, Slides } from '@ionic/angular';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';
import { RaceType } from '../../enums/race-type.enum';
import { SharedServices } from '../../services/shared-services.service';
import { Gender } from '../../enums/gender.enum';
import { CharacterSheetComponent } from '../character-sheet/character-sheet.component';

@Component({
    selector: 'app-new-character',
    templateUrl: './new-character.component.html',
    styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit, OnDestroy {
    @ViewChild('slidesContainer') slidesContainer: Slides;

    public newCharacter: Character;
    public editMode: boolean;
    public show: boolean;
    public activeSlide = 0;
    public raceTypes = Object.keys(RaceType);
    public classTypes = Object.keys(ClassType);
    public genders = Object.keys(Gender);

    constructor(
        private nav: Nav,
        private characterService: CharacterService,
        private sharedServices: SharedServices
    ) { }

    ngOnInit() {
        this.show = true;
        this.newCharacter = this.sharedServices.generateNewCharacter();
        this.newCharacter.information.race = RaceType[this.raceTypes[0]];
        this.newCharacter.information.classType = ClassType[this.classTypes[0]];
        this.newCharacter.information.gender = Gender[this.genders[0]];
    }

    ngOnDestroy() {
        this.saveCharacter();
    }

    public saveCharacter() {
        this.characterService.saveCharacter(this.newCharacter).subscribe((id) => {
            this.nav.push(NewCharacterComponent, {
                character: this.newCharacter,
                editMode: true
            });
        });
    }

    public goBack() {
        this.activeSlide--;
        this.slidesContainer.slideTo(this.activeSlide);
    }

    public goForward() {
        this.slidesContainer.isEnd().then((isEnd) => {
            if (isEnd) {
                this.nav.push(CharacterSheetComponent, {character: this.newCharacter});
            } else {
                this.activeSlide++;
                this.slidesContainer.slideTo(this.activeSlide);
            }
        });
    }

    public selectRace(race: string) {
        this.newCharacter.information.race = RaceType[race];
    }

    public selectClass(classtype: string) {
        this.newCharacter.information.classType = ClassType[classtype];
    }

    public selectGender(event: any) {
        const gender = event.detail.value;
        this.newCharacter.information.gender = Gender[gender] as Gender;
    }
}
