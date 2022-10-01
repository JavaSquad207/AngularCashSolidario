import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelaentidadeComponent } from './telaentidade/telaentidade.component';

const routes: Routes = [{ path: '', component: TelaentidadeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntidadeRoutingModule {}
