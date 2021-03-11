import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { CharacterSheetModule } from './components/character-sheet/character-sheet.module';
import { HomePageModule } from './components/home/home.module';
import { IonicStorageModule } from '@ionic/storage';
import { MyCharactersModule } from './components/my-characters/my-characters.module';
import { SharedServices } from './services/shared-services.service';
import { NewCharacterModule } from './components/new-character/new-character.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AngularSvgIconModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot({
      animated: true
    }),
    IonicStorageModule.forRoot(),
    HomePageModule,
    NewCharacterModule,
    MyCharactersModule,
    CharacterSheetModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SharedServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
