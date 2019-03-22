import { Nav, Slides } from '@ionic/angular';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';
import { RaceType } from '../../enums/race-type.enum';
import { SharedServices } from '../../services/shared-services.service';

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

    public selectedRace: RaceType;

    constructor(
        private nav: Nav,
        private characterService: CharacterService,
        private sharedServices: SharedServices
    ) { }

    ngOnInit() {
        this.show = true;
        this.newCharacter = this.sharedServices.generateNewCharacter();
        this.selectedRace = RaceType[this.raceTypes[0]];
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
        this.activeSlide++;
        this.slidesContainer.slideTo(this.activeSlide);
    }

    public selectRace(race: string) {
        this.selectedRace = RaceType[race];
    }
}
