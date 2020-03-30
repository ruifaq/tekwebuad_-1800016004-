import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import * as praktikum03Component from './pages/praktikum03/praktikum03.component';
import * as praktikum04Component from './pages/praktikum04/praktikum04.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    praktikum03Component.Praktikum03Component,
    praktikum04Component.Praktikum04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
