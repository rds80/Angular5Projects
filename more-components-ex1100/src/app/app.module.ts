import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent, NameComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
=======

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
>>>>>>> 5f91962b406990d75b063e028192a0e570d3f0d3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
