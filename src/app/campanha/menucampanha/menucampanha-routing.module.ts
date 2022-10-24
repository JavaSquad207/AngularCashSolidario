import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenucampanhaComponent } from './menucampanha/menucampanha.component';

const routes: Routes = [{ path: '', component: MenucampanhaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenucampanhaRoutingModule {}
