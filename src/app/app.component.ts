import { Component, ViewChild } from '@angular/core';

import { Config, IonNav } from '@ionic/angular';
import { HomePage } from './components/home/home.page';
import { TranslateService } from '@ngx-translate/core';
import { ViewController } from '@ionic/core';
import { MyCharactersComponent } from './components/my-characters/my-characters.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild('main') nav: IonNav;
  public configs: Config;

  public appPages = [
    {
      title: 'Home',
      component: HomePage,
      icon: 'home'
    },
    {
      title: 'My characters',
      component: MyCharactersComponent,
      icon: 'people'
    }
  ];

  public home = HomePage;

  constructor(
    private translateService: TranslateService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.translateService.setDefaultLang('en');
  }

  goTo(comp: ViewController) {
    this.nav.setRoot(comp);
  }
}
