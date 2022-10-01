import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { TelaprincipalRoutingModule } from './telaprincipal-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TelaprincipalRoutingModule, AppMaterialModule],
})
export class TelaprincipalModule {}
