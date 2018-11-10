import { Component, ViewChild } from '@angular/core';

import { Platform, NavController, Config } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './components/home/home.page';
import { Location } from '@angular/common';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild('nav') nav: NavController;
  public configs: Config;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Character',
      url: '/character',
      icon: 'people'
    }
  ];

  public home = HomePage;

  constructor(
    private platform: Platform,
    private location: Location,
    private splashScreen: SplashScreen,
    private navCtrl: NavController,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
