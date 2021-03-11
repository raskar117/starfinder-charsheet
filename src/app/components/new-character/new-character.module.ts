import { NgModule } from '@angular/core';
import { NewCharacterComponent } from './new-character.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
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
