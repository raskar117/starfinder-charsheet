import { NgModule } from '@angular/core';
import { NewCharacterComponent } from './new-character.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import { CharacterService } from '../../services/character.service';

@NgModule({
    entryComponents: [NewCharacterComponent],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        IonicModule,
        AngularSvgIconModule,
        TranslateModule
    ],
    declarations: [NewCharacterComponent],
    exports: [NewCharacterComponent],
    providers: [
        CharacterService
    ]
})
export class NewCharacterModule {}
