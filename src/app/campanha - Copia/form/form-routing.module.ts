import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcampanhaComponent } from './formcampanha/formcampanha.component';

const routes: Routes = [{path: '', component: FormcampanhaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
