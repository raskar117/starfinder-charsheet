import { Input } from '@angular/core';

export class BlockComponent {
  @Input() isReadOnly: boolean;

  constructor() {}
}
