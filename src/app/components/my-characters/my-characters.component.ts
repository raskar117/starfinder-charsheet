import { Component, OnInit } from '@angular/core';
import { Nav } from '@ionic/angular';
import { Character } from '../../models/character.model';
import { CharacterSheetComponent } from '../character-sheet/character-sheet.component';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-my-characters',
  templateUrl: './my-characters.component.html',
  styleUrls: ['./my-characters.component.scss']
})
export class MyCharactersComponent implements OnInit {
  public charactersList: Array<Character>;

  constructor(
    private characterService: CharacterService,
    private nav: Nav
  ) { }

  ngOnInit() {
    this.characterService.getCharacters().subscribe((characters: Array<Character>) => {
      this.charactersList = characters;
      this.charactersList.push(characters[0]);
      this.charactersList.push(characters[0]);
      this.charactersList.push(characters[0]);
      this.charactersList.push(characters[0]);
      this.charactersList.push(characters[0]);
      this.charactersList.push(characters[0]);
      this.charactersList.push(characters[0]);
      this.charactersList.push(characters[0]);
    });
  }

  public goToCharacter(character: Character) {
    this.nav.push(CharacterSheetComponent, { character: character});
  }

  public editCharacter(event: MouseEvent, character: Character) {
    event.stopPropagation();
    this.nav.push(CharacterSheetComponent, { character: character, editMode: true});
  }

  public deleteCharacter(event: MouseEvent, character: Character) {
    event.stopPropagation();
    // TO-DO
  }

}
