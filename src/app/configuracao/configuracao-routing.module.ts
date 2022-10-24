import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from '../cliente/menu/menu.component';
import { ConfiguracaoComponent } from './configuracao.component';

const routes: Routes = [
  { path: '', component: ConfiguracaoComponent },
  { path: 'configuracao', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracaoRoutingModule {}
