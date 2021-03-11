
import { Output, Input, EventEmitter } from '@angular/core';

export class CharsheetGenericInputComponent<T> {
  @Input() editMode: boolean;
  @Input() placeholder: string;

  @Input()
  get currentValue() {
    return this._currentValue;
  }
  set currentValue(val) {
    this._currentValue = val;
    this.currentValueChange.emit(this._currentValue);
  }

  @Output() currentValueChange = new EventEmitter<T>();

  private _currentValue: T;
}
