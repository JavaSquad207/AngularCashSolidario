import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuenderecoComponent } from './menuendereco/menuendereco.component';
import { EnderecoComponent } from './endereco/endereco.component';

const routes: Routes = [
  {path: '', component: EnderecoComponent},
  {path: 'menuendereco', component: MenuenderecoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecoRoutingModule { }
