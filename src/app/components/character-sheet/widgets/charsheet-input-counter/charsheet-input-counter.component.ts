import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-counter',
  templateUrl: './charsheet-input-counter.component.html',
  styleUrls: ['./charsheet-input-counter.component.scss']
})
export class CharsheetInputCounterComponent implements OnInit {
  @Input()
  get currentValue() {
    return this._currentValue;
  }

  set currentValue(val) {
    this._currentValue = val;
    this.currentValueChange.emit(this._currentValue);
  }

  @Output() currentValueChange = new EventEmitter<number>();

  @Input()
  get total() {
    return this._total;
  }
  set total(val) {
    this._total = val;
    this.totalChange.emit(this._total);
  }

  @Output() totalChange = new EventEmitter<number>();

  @Input() placeholder: string;

  @Input() editMode: boolean;

  private _total: number;
  private _currentValue: number;

  constructor() { }

  ngOnInit() {
  }

  public increasePoint() {
    this.currentValue++;
  }

  public decreasePoint() {
    this.currentValue--;
  }

  public increaseTotal() {
    this.total++;
  }

  public decreaseTotal() {
    this.total--;
  }

}
