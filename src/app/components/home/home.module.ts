import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  entryComponents: [HomePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomePageModule {}
