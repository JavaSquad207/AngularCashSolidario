import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampanhaComponent } from './campanha/campanha/campanha.component';
import { FormcampanhaComponent } from './campanha/form/formcampanha/formcampanha.component';
import { MenucampanhaComponent } from './campanha/menucampanha/menucampanha/menucampanha.component';
import { DoacaoModule } from './doacao/doacao.module';
import { EntidadeComponent } from './entidade/entidade/entidade.component';
import { MenuentidadeComponent } from './entidade/menuentidade/menuentidade.component';
import { FooterModule } from './shared/footer/footer.module';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { HeaderModule } from './shared/header/header.module';
import { HeaderComponent } from './shared/header/header/header.component';
import { HomeModule } from './view/home/home.module';
import { FormdoacaoComponent } from './doacao/formdoacao/formdoacao.component';

@NgModule({
  declarations: [MenuentidadeComponent ,AppComponent, FooterComponent, HeaderComponent, EntidadeComponent, MenucampanhaComponent, FormcampanhaComponent, CampanhaComponent, FormdoacaoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    HomeModule,
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
    DoacaoModule



  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
