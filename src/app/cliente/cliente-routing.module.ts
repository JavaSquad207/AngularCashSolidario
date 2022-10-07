import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  {path: '', component: ClienteComponent},
  {path: 'cliente', component: MenuComponent},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
