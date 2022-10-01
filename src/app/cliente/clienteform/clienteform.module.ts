import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ClienteformRoutingModule } from './clienteform-routing.module';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    ClienteformRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AppMaterialModule,
    MatToolbarModule
  ],
})
export class ClienteformModule {}
