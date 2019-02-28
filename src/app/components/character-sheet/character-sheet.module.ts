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
import { SpinnerModule } from 'primeng/spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbilitiesScoreBlockComponent } from './blocks/abilities-score-block/abilities-score-block.component';
import { SkillsBlockComponent } from './blocks/skills-block/skills-block.component';
import { HealthResolveBlockComponent } from './blocks/health-resolve-block/health-resolve-block.component';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../../services/character.service';
import { CharsheetInputCounterComponent } from './widgets/charsheet-input-counter/charsheet-input-counter.component';

@NgModule({
  entryComponents: [CharacterSheetComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AccordionModule,
    InputTextModule,
    SpinnerModule
  ],
  declarations: [
    CharacterSheetComponent,
    CharsheetInputTextComponent,
    CharsheetInputCounterComponent,
    CharInfoBlockComponent,
    DescriptionBlockComponent,
    AbilitiesScoreBlockComponent,
    SkillsBlockComponent,
    HealthResolveBlockComponent
  ],
  exports: [CharacterSheetComponent],
  providers: [
    CharacterService
  ]
})
export class CharacterSheetModule { }
