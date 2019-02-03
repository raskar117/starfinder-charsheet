import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../block-component';

@Component({
  selector: 'app-abilities-score-block',
  templateUrl: './abilities-score-block.component.html',
  styleUrls: ['./abilities-score-block.component.scss']
})
export class AbilitiesScoreBlockComponent extends BlockComponent implements OnInit {

  public abilitiesKeys: Array<string>;

  constructor() {
    super();
  }

  ngOnInit() {
    this.abilitiesKeys = new Array<string>();
    if (this.character.abilities) {
      Object.keys(this.character.abilities).map((a) => {
        this.abilitiesKeys.push(a);
      });
    }
  }
}
