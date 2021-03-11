import { Component, OnInit, Input } from '@angular/core';
import { CharsheetGenericInputComponent } from '../charsheet-generic-input.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './charsheet-input-text.component.html',
  styleUrls: ['./charsheet-input-text.component.scss']
})
export class CharsheetInputTextComponent extends CharsheetGenericInputComponent<string> implements OnInit {
  @Input() type = 'text';

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
