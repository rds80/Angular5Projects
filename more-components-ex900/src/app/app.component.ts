import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'Paragraph',
  template: `
    <div>
    <b>{{title.nativeElement.innerHTML}}</b>
    <p><ng-content></ng-content></p>
    </div>
  `,
  styles: ['p {border: 1px solid #c0c0c0}']
})
export class Paragraph {
  @ContentChild('title') title;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to app';
}
