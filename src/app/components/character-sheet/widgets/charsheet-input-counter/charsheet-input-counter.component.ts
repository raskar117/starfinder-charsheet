import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CharsheetGenericInputComponent } from '../charsheet-generic-input.component';

@Component({
  selector: 'app-input-counter',
  templateUrl: './charsheet-input-counter.component.html',
  styleUrls: ['./charsheet-input-counter.component.scss']
})
export class CharsheetInputCounterComponent extends CharsheetGenericInputComponent<number> implements OnInit {
  @Input()
  get total() {
    return this._total;
  }
  set total(val) {
    this._total = val;
    this.totalChange.emit(this._total);
  }

  @Output() totalChange = new EventEmitter<number>();

  private _total: number;

  constructor() {
    super();
  }

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
