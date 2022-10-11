import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { FormRoutingModule } from './form-routing.module';
import { FormclienteComponent } from './formcliente/formcliente.component';

@NgModule({
  declarations: [FormclienteComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormRoutingModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class FormModule {}
