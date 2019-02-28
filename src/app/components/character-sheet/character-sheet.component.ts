import { Nav, NavParams } from '@ionic/angular';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit, OnDestroy {

  public character: Character;
  public editMode: boolean;
  public show: boolean;

  constructor(
    private nav: Nav,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.show = true;
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

}
