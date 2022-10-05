import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)},

  { path: 'formcliente', loadChildren: () => import('./cliente/form/form.module').then(m => m.FormModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
