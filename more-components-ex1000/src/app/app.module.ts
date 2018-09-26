import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, Person, Paragraph } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Person,
    Paragraph
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
