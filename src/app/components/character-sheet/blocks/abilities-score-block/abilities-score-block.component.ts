import { Ability } from './../../../../models/character-blocks/ability.model';
import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../block-component';

@Component({
  selector: 'app-abilities-score-block',
  templateUrl: './abilities-score-block.component.html',
  styleUrls: ['./abilities-score-block.component.scss']
})
export class AbilitiesScoreBlockComponent extends BlockComponent implements OnInit {

  public abilitiesList: Map<string, Ability>;

  constructor() {
    super();
  }

  ngOnInit() {
    this.abilitiesList = new Map<string, Ability>();
    if (this.character.abilities) {
      Object.keys(this.character.abilities).map((a) => {
        this.abilitiesList.set(a.toUpperCase(), this.character.abilities[a]);
      });
    }
  }
}
