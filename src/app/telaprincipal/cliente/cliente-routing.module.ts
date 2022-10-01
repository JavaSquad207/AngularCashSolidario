import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelaclienteComponent } from './telacliente/telacliente.component';

const routes: Routes = [{ path: '', component: TelaclienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
