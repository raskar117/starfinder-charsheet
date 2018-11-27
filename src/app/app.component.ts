import { Component, ViewChild } from '@angular/core';

import { Platform, Config, Nav } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './components/home/home.page';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { TranslateService } from '@ngx-translate/core';
import { ViewController } from '@ionic/core';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild('nav') nav: Nav;
  public configs: Config;

  public appPages = [
    {
      title: 'Home',
      component: HomePage,
      icon: 'home'
    },
    {
      title: 'Character',
      component: CharacterSheetComponent,
      icon: 'people'
    },
    {
      title: 'Settings',
      component: SettingsComponent,
      icon: 'hammer'
    }
  ];

  public home = HomePage;

  constructor(
    private translateService: TranslateService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.translateService.setDefaultLang('en');
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goTo(comp: ViewController) {
    this.nav.push(comp);
  }
}
