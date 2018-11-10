import { CharInfoBlockComponent } from './blocks/char-info-block/char-info-block.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSheetComponent } from './character-sheet.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  entryComponents: [CharacterSheetComponent],
  imports: [
    CommonModule,
    IonicModule,
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule
  ],
  declarations: [
    CharacterSheetComponent,
    CharInfoBlockComponent
  ],
  exports: [CharacterSheetComponent]
})
export class CharacterSheetModule { }
