import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampanhaComponent } from './campanha/campanha.component';

const routes: Routes = [{path:'', component: CampanhaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampanhaRoutingModule { }
