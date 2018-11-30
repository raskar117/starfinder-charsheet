import { Nav, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {

  public character: Character;
  public editMode: boolean;

  constructor(
    private nav: NavParams,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    console.log('char : ', this.character);
  }

  public activateEditMode() {
    this.editMode = true;
  }

  public saveCharacter() {
    this.characterService.saveCharacter(this.character).subscribe((id) => {
      console.log('character saved : ' + id);
      this.editMode = false;
    });
  }

}
