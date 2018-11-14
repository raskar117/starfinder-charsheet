import { TranslateModule } from '@ngx-translate/core';
import { CharsheetInputTextComponent } from './widgets/charsheet-input-text/charsheet-input-text.component';
import { DescriptionBlockComponent } from './blocks/description-block/description-block.component';
import { CharInfoBlockComponent } from './blocks/char-info-block/char-info-block.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSheetComponent } from './character-sheet.component';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbilitiesScoreBlockComponent } from './blocks/abilities-score-block/abilities-score-block.component';

@NgModule({
  entryComponents: [CharacterSheetComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule,
    TranslateModule,
    AccordionModule,
    InputTextModule
  ],
  declarations: [
    CharacterSheetComponent,
    CharsheetInputTextComponent,
    CharInfoBlockComponent,
    DescriptionBlockComponent,
    AbilitiesScoreBlockComponent
  ],
  exports: [CharacterSheetComponent]
})
export class CharacterSheetModule { }
