import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../block-component';

@Component({
  selector: 'app-char-info-block',
  templateUrl: './char-info-block.component.html',
  styleUrls: ['./char-info-block.component.scss']
})
export class CharInfoBlockComponent extends BlockComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
