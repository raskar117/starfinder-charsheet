
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-block',
  templateUrl: './charsheet-number-block.component.html',
  styleUrls: ['./charsheet-number-block.component.scss']
})
export class CharsheetNumberBlockComponent implements OnInit {
  @Input() label: string;
  @Input() readonly: boolean;
  @Input()
  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.valueChange.emit(this._value);
  }

  @Output() valueChange = new EventEmitter<number>();

  private _value: number;


  ngOnInit() {
  }
}
