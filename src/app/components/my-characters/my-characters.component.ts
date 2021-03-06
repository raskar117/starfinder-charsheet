import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';
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
    private nav: IonNav
  ) { }

  ngOnInit() {
    this.characterService.getCharacters().subscribe((characters: Array<Character>) => {
      this.charactersList = characters;
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
    this.characterService.deleteCharacter(character.id).subscribe(() => {
      this.charactersList.splice(this.charactersList.findIndex(ent => ent.id === character.id), 1);
    });
    // TO-DO
  }

}
