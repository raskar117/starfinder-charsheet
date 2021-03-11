import { Component, OnInit, Input } from '@angular/core';
import { CharsheetGenericInputComponent } from '../charsheet-generic-input.component';

@Component({
  selector: 'app-input-select',
  templateUrl: './charsheet-input-select.component.html',
  styleUrls: ['./charsheet-input-select.component.scss']
})
export class CharsheetInputSelectComponent extends CharsheetGenericInputComponent<string> implements OnInit {
  @Input() values: Array<string>;
  @Input() tradEnumKey: string;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
