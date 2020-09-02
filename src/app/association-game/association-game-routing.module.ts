import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociationGamePage } from './association-game.page';

const routes: Routes = [
  {
    path: '',
    component: AssociationGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociationGamePageRoutingModule {}
