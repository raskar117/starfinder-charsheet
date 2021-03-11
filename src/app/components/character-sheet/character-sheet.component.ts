import { IonNav, IonSlides } from '@ionic/angular';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: 'character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(IonSlides) slidesContainer: IonSlides;

  public character: Character;
  public editMode: boolean;
  public show: boolean;
  public activeSlide = 0;

  constructor(
    private nav: IonNav,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.show = true;
  }
  
  ngAfterViewInit() {
    this.slidesContainer.ionSlideDidChange.subscribe(() => {
      this.slidesContainer.getActiveIndex().then((index) => {
        this.activeSlide = index;
      });
    });
  }

  ngOnDestroy() {
    this.saveCharacter();
  }

  public activateEditMode() {
    this.editMode = true;
  }

  public saveCharacter() {
    this.characterService.saveCharacter(this.character).subscribe((id) => {
      this.editMode = false;
    });
  }

  public goToSlide(index: number) {
    this.activeSlide = index;
    this.slidesContainer.slideTo(index);
  }

}
