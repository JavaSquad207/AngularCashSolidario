import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnderecoComponent } from './endereco/endereco.component';
import { MenuenderecoComponent } from './menuendereco/menuendereco.component';

const routes: Routes = [
  { path: '', component: EnderecoComponent },
  { path: 'menuendereco', component: MenuenderecoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnderecoRoutingModule {}
