import { Component } from '@angular/core';
import { Nav } from '@ionic/angular';
import { CharacterSheetComponent } from '../character-sheet/character-sheet.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private nav: Nav
  ) {}

  public createNewCharacter() {
    this.nav.push(CharacterSheetComponent, { character: null });
  }

}
