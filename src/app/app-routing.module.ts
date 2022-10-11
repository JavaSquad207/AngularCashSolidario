import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './cliente/menu/menu.component';
import { HomeComponent } from './view/home/home/home.component';
import { MenuenderecoComponent } from './endereco/menuendereco/menuendereco.component';
import { MenuentidadeComponent } from './entidade/menuentidade/menuentidade.component';
import { EntidadeComponent } from './entidade/entidade/entidade.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cliente', component: MenuComponent},
  { path: 'novocliente', loadChildren: () => import('./cliente/form/form.module').then(m => m.FormModule)},
  { path: 'cliente/cadastrocliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)},
  { path: 'listadeendereco', loadChildren: () => import('./endereco/endereco.module').then(m => m.EnderecoModule)},
  { path: 'endereco',component: MenuenderecoComponent},
  { path: 'entidade', component: MenuentidadeComponent},
  { path: 'novaentidade',loadChildren: () => import('./entidade/form/form.module').then(m => m.FormModule)},
  { path: 'listaentidades',component: EntidadeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
