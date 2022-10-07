import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormenderecoComponent } from './formendereco/formendereco.component';

const routes: Routes = [{path: '', component: FormenderecoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
