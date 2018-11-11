import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './charsheet-input-text.component.html',
  styleUrls: ['./charsheet-input-text.component.scss']
})
export class CharsheetInputTextComponent implements OnInit {
  @Input() value: any;

  @Input() placeholder: string;

  @Input() type = 'text';

  constructor() { }

  ngOnInit() {
  }

}
