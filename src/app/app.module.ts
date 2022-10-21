import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';
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
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import localePt from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { CampanhaComponent } from './campanha/campanha/campanha.component';
import { FormcampanhaComponent } from './campanha/form/formcampanha/formcampanha.component';
import { MenucampanhaComponent } from './campanha/menucampanha/menucampanha/menucampanha.component';
import { DoacaoModule } from './doacao/doacao.module';
import { FormdoacaoComponent } from './doacao/formdoacao/formdoacao.component';
import { EntidadeComponent } from './entidade/entidade/entidade.component';
import { MenuentidadeComponent } from './entidade/menuentidade/menuentidade.component';
import { FooterModule } from './shared/footer/footer.module';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { HeaderModule } from './shared/header/header.module';
import { HeaderComponent } from './shared/header/header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';


registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [MenuentidadeComponent ,AppComponent, FooterComponent, HeaderComponent, EntidadeComponent, MenucampanhaComponent, FormcampanhaComponent, CampanhaComponent, FormdoacaoComponent, SidenavComponent, BodyComponent, ConfiguracaoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
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
    FormsModule,
    TextMaskModule,
    DoacaoModule,
    NgxMaskModule.forRoot({dropSpecialCharacters: false})



  ],
  providers: [

    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },

    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
