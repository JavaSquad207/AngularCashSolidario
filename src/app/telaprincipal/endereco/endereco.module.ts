import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { EnderecoRoutingModule } from './endereco-routing.module';
import { TelaenderecoComponent } from './telaendereco/telaendereco.component';

@NgModule({
  declarations: [TelaenderecoComponent],
  imports: [CommonModule, EnderecoRoutingModule, AppMaterialModule],
})
export class EnderecoModule {}
