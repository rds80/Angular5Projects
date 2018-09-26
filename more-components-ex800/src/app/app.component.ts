import { Component } from '@angular/core';

@Component({
  selector: 'Paragraph',
  template: `
  <p><ng-content></ng-content></p>
  `,
  styles: ['p{border: 1px solid #c0c0c0; padding:10px}']
})
export class Paragraph {
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weelcome to app';
}
