import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './SoftTek/login/login.component';
import { VentasComponent } from './SoftTek/ventas/ventas.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent, VentasComponent]
})
export class AppModule { }
