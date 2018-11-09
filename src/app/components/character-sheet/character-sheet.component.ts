import { Nav } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  public character: any;

  constructor(
    private nav: Nav
  ) { }

  ngOnInit() {
    console.log('char : ', this.character);
  }

}
