import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { MenuComponent } from './menu/menu.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ClienteComponent, MenuComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,

    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule


  ],
})
export class ClienteModule {}
