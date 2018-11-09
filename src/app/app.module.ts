import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterSheetModule } from './components/character-sheet/character-sheet.module';
import { HomePageModule } from './components/home/home.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([]),
    HomePageModule,
    CharacterSheetModule
  ],
  providers: [
    StatusBar,
    SplashScreen
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
