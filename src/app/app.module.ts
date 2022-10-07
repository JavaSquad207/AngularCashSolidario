import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './shared/footer/footer.module';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { HeaderModule } from './shared/header/header.module';
import { HeaderComponent } from './shared/header/header/header.component';
import { HomeModule } from './view/home/home.module';
import { HomeComponent } from './view/home/home/home.component';

@NgModule({
  declarations: [AppComponent,HomeComponent, FooterComponent, HeaderComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    HomeModule,



  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
