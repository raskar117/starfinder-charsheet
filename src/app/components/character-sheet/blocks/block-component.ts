import { Input } from '@angular/core';
import { Character } from '../../../models/character.model';
import { DisplayMode } from '../../../enums/display-mode.enum';

export class BlockComponent {
  @Input() isReadOnly: boolean;
  @Input() character: Character;
  @Input() displayMode: DisplayMode;

  constructor() {}

  public get isClassicDisplay(): boolean {
    return this.displayMode === DisplayMode.CLASSIC;
  }

  public get isDashboardDisplay(): boolean {
    return this.displayMode === DisplayMode.DASHBOARD;
  }
}
