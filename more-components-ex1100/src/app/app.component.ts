<<<<<<< HEAD
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'name',
  template: `
    <p *ngFor="let change of changes">
      {{change}}
    </p>
  `,
  styles: []
})
export class NameComponent implements OnChanges{
  @Input('name') nm;
  changes: Array<string> = [''];
  ngOnChanges(changes: SimpleChanges) {
    this.changes.push(JSON.stringify(changes));
  }
}
=======
import { Component } from '@angular/core';
>>>>>>> 5f91962b406990d75b063e028192a0e570d3f0d3

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  name: string ='';
=======
  title = 'app';
>>>>>>> 5f91962b406990d75b063e028192a0e570d3f0d3
}
