import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  declarations: [ClienteComponent],
  imports: [CommonModule, ClienteRoutingModule, AppMaterialModule],
})
export class ClienteModule {}
