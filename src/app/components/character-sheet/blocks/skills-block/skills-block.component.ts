import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../models/character-blocks/skill.model';
import { BlockComponent } from '../block-component';
import { SkillKey } from '../../../../enums/skill-key.enum';

@Component({
  selector: 'app-skills-block',
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.scss']
})
export class SkillsBlockComponent extends BlockComponent implements OnInit {

  public skillsList: Map<string, Skill>;

  public minClassBonus: number;
  public minAbilityModifier: number;
  public minMiscModifier: number;
  public minRanks: number;

  constructor() {
    super();
  }

  ngOnInit() {
    this.skillsList = new Map<string, Skill>();
    if (this.character.skills) {
      Object.keys(SkillKey).map((s) => {
        this.skillsList.set(s, this.character.skills.find(skill => skill.key === s));
      });
    }
  }

  getSkillAbilityModifier(skill: Skill): number {
    return this.character.abilities.find(a => a.key === skill.ability).modifier;
  }

  getSkillTotal(skill: Skill): number {
    return skill.getTotal(this.getSkillAbilityModifier(skill));
  }

}
