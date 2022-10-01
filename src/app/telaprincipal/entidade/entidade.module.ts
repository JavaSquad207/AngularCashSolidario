import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { EntidadeRoutingModule } from './entidade-routing.module';
import { TelaentidadeComponent } from './telaentidade/telaentidade.component';

@NgModule({
  declarations: [TelaentidadeComponent],
  imports: [CommonModule, EntidadeRoutingModule, AppMaterialModule],
})
export class EntidadeModule {}
