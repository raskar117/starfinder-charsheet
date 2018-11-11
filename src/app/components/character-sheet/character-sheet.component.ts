import { Nav, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {

  public character: Character;

  constructor(
    private nav: NavParams
  ) { }

  ngOnInit() {
    console.log('char : ', this.character);
  }

}
