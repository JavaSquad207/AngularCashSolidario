import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelaenderecoComponent } from './telaendereco/telaendereco.component';

const routes: Routes = [{ path: '', component: TelaenderecoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnderecoRoutingModule {}
