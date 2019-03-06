import { Character } from './../../models/character.model';
import { Component, OnInit } from '@angular/core';
import { Nav } from '@ionic/angular';
import { CharacterSheetComponent } from '../character-sheet/character-sheet.component';
import { CharacterInformation } from '../../models/character-blocks/character-information.model';
import { ClassType } from '../../enums/class-type.enum';
import { RaceType } from '../../enums/race-type.enum';
import { Theme } from '../../enums/theme.enum';
import { Gender } from '../../enums/gender.enum';
import { Abilities } from '../../models/character-blocks/abilities.model';
import { Ability } from '../../models/character-blocks/ability.model';
import { CharacterService } from '../../services/character.service';
import { MyCharactersComponent } from '../my-characters/my-characters.component';
import { Initiative } from '../../models/character-blocks/initiative.model';
import { SharedServices } from '../../services/shared-services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public charactersList: Array<Character>;

  constructor(
    private nav: Nav,
    private characterService: CharacterService,
    private sharedServices: SharedServices
  ) { }

  ngOnInit() {
    // this.createNewCharacter();
    this.charactersList = new Array<Character>();
    this.characterService.getCharacters().subscribe((characters: Array<Character>) => {
      this.charactersList = characters;
      this.charactersList.push(characters[0]);
    });
  }

  public createNewCharacter() {
    const newCharacter = this.sharedServices.generateNewCharacter();
    this.nav.push(CharacterSheetComponent, {
      character: newCharacter,
      editMode: true
    });
  }

  public goToMyCharacters() {
    this.nav.push(MyCharactersComponent);
  }

}
