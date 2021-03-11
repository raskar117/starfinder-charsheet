import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../block-component';

@Component({
  selector: 'app-health-resolve-block',
  templateUrl: './health-resolve-block.component.html',
  styleUrls: ['./health-resolve-block.component.scss']
})
export class HealthResolveBlockComponent extends BlockComponent implements OnInit {

  public isExpanded = true;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  public open() {
    this.isExpanded = !this.isExpanded;
  }

  public close() {
    this.isExpanded = false;
  }

}
