import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { FormRoutingModule } from './form-routing.module';
import { FormenderecoComponent } from './formendereco/formendereco.component';


@NgModule({
  declarations: [
    FormenderecoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    CommonModule,
    FormRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
  ]
})
export class FormModule { }
