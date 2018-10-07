import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h1>Post Title Name</h1>
    <p>{{_result|async}}</p>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  _result: any;
  constructor(private _http: HttpClient){}
  ngOnInit() {
    this._result =
      this._http.get<Array<any>>('http://jsonplaceholder.typicode.com/posts')
                .pipe(
                  map(response => {let titles = '';
                    for (const responseItem of response) {
                      titles += responseItem['title'];
                    }
                    return titles;
                  })
                )
  }
}
