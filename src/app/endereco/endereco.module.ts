import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { EnderecoRoutingModule } from './endereco-routing.module';
import { EnderecoComponent } from './endereco/endereco.component';
import { MenuenderecoComponent } from './menuendereco/menuendereco.component';

@NgModule({
  declarations: [
    MenuenderecoComponent,
    EnderecoComponent],
  imports: [
    CommonModule,
    EnderecoRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
  ]
})
export class EnderecoModule { }
