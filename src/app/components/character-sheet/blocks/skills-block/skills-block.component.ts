import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../models/character-blocks/skill.model';
import { BlockComponent } from '../block-component';

@Component({
  selector: 'app-skills-block',
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.scss']
})
export class SkillsBlockComponent extends BlockComponent implements OnInit {

  public skillsList: Map<string, Skill>;

  constructor() {
    super();
  }

  ngOnInit() {
    this.skillsList = new Map<string, Skill>();
    if (this.character.skills) {
      Object.keys(this.character.skills).map((s) => {
        this.skillsList.set(s.toUpperCase(), this.character.skills[s]);
      });
    }
  }

}
