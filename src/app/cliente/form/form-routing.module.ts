import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormclienteComponent } from './formcliente/formcliente.component';

const routes: Routes = [{ path: '', component: FormclienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
