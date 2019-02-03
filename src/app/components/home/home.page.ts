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
    this.nav.push(CharacterSheetComponent, {
      character: new Character(
        null,
        new CharacterInformation('Elliad', ClassType.OPERATIVE, 2, RaceType.KASATHAS, Theme.OUTLAW, 170, 30, Gender.MALE, 'test', null, null, 'Vincent'),
        'blablabla',
        new Abilities(new Ability(14), new Ability(17), new Ability(10), new Ability(12), new Ability(10), new Ability(10)),
        null,
        new Initiative(null, null),
        null,
        null,
        null,
        null,
        null
      ),
      editMode: true
    });
  }

  public goToMyCharacters() {
    this.nav.push(MyCharactersComponent);
  }

}
