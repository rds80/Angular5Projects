import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logs: Array<string> = [new Date() + ''];
  constructor() {
    for (let i=0; i<1000; i++)
    {
      console.log(i);
    }
  }

  ngOnInit() {
    this.logs.push(new Date() + '');
  }
}
