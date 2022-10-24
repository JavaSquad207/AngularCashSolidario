import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormentidadeComponent } from './formentidade/formentidade.component';

const routes: Routes = [{ path: '', component: FormentidadeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
