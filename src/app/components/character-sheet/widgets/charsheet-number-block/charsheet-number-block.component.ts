
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CharsheetGenericInputComponent } from '../charsheet-generic-input.component';

@Component({
  selector: 'app-number-block',
  templateUrl: './charsheet-number-block.component.html',
  styleUrls: ['./charsheet-number-block.component.scss']
})
export class CharsheetNumberBlockComponent extends CharsheetGenericInputComponent<number> implements OnInit {
  @Input() readonly: boolean;

  ngOnInit() {
  }
}
