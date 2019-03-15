import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../block-component';
import { ClassType } from '../../../../enums/class-type.enum';
import { Theme } from '../../../../enums/theme.enum';
import { RaceType } from '../../../../enums/race-type.enum';
import { Gender } from '../../../../enums/gender.enum';

@Component({
  selector: 'app-char-info-block',
  templateUrl: './char-info-block.component.html',
  styleUrls: ['./char-info-block.component.scss']
})
export class CharInfoBlockComponent extends BlockComponent implements OnInit {

  public classTypes = Object.keys(ClassType);
  public raceTypes = Object.keys(RaceType);
  public themes = Object.keys(Theme);
  public genders = Object.keys(Gender);

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
