import { CharInfoBlockComponent } from './blocks/char-info-block/char-info-block.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSheetComponent } from './character-sheet.component';

@NgModule({
  entryComponents: [CharacterSheetComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    CharacterSheetComponent,
    CharInfoBlockComponent
  ],
  exports: [CharacterSheetComponent]
})
export class CharacterSheetModule { }
