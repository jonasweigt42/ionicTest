import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssociationGamePageRoutingModule } from './association-game-routing.module';

import { AssociationGamePage } from './association-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssociationGamePageRoutingModule
  ],
  declarations: [AssociationGamePage]
})
export class AssociationGamePageModule {}
