import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCharactersComponent } from './my-characters.component';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

@NgModule({
  entryComponents: [MyCharactersComponent],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule,
    TranslateModule
  ],
  declarations: [MyCharactersComponent],
  exports: [MyCharactersComponent]
})
export class MyCharactersModule { }
