import { Character } from './../../models/character.model';
import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';
import { CharacterService } from '../../services/character.service';
import { MyCharactersComponent } from '../my-characters/my-characters.component';
import { NewCharacterComponent } from '../new-character/new-character.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public charactersList: Array<Character>;

  constructor(
    private nav: IonNav,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.charactersList = new Array<Character>();
    this.characterService.getCharacters().subscribe((characters: Array<Character>) => {
      this.charactersList = characters;
    });
  }

  public createNewCharacter() {
    this.nav.push(NewCharacterComponent);
  }

  public goToMyCharacters() {
    this.nav.push(MyCharactersComponent);
  }

}
