import { Component, ViewChildren, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren('paragraph1,paragraph2') paragraphs;
  note: string = '';
  title = 'app';
  ngAfterViewInit() {
    setTimeout(_ => this.note = 'Number of Paragraphs: ' + this.paragraphs.length);
  }
}
