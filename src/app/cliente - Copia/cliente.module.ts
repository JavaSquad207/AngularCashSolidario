import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [ClienteComponent, MenuComponent],
  imports: [
     CommonModule,
     ClienteRoutingModule,
     MatCardModule,
     MatTableModule,
     MatIconModule,
     MatCardModule,
     MatIconModule,
     MatFormFieldModule,
     MatToolbarModule,
     MatButtonModule,
     MatCardModule,
     MatNativeDateModule,
     MatDatepickerModule,
     MatDialogModule,
     MatFormFieldModule,
     MatIconModule,
     MatInputModule,
     MatRadioModule,
     MatSelectModule,
     MatTableModule,
     MatToolbarModule,
    ],

})
export class ClienteModule {}
