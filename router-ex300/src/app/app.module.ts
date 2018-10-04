import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { 
  AppComponent,
  DetailComponent, 
  PleaseSelectComponent } from './app.component';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    PleaseSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
