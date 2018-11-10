import { Input } from '@angular/core';
import { Character } from '../../../models/character.model';

export class BlockComponent {
  @Input() isReadOnly: boolean;
  @Input() character: Character;

  constructor() {}
}
