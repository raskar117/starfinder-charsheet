import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSheetComponent } from './character-sheet.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [CharacterSheetComponent],
  exports: [CharacterSheetComponent]
})
export class CharacterSheetModule { }
