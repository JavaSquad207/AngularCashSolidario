import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuentidadeComponent } from './menuentidade/menuentidade.component';

const routes: Routes = [{path: '', component: MenuentidadeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntidadeRoutingModule { }
