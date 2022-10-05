import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component';
import { MenuComponent } from './menu/menu.component';
import { FormclienteComponent } from './form/formcliente/formcliente.component';

const routes: Routes = [
  {path: '', component: ClienteComponent},
  {path: 'clientemenu', component: MenuComponent},
  

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
