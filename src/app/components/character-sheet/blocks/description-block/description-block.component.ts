import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../block-component';

@Component({
  selector: 'app-description-block',
  templateUrl: './description-block.component.html',
  styleUrls: ['./description-block.component.scss']
})
export class DescriptionBlockComponent extends BlockComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
