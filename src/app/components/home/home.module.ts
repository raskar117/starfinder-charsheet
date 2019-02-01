import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  entryComponents: [HomePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule
  ],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomePageModule {}
