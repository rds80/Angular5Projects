import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="_search" placeholder="city">
    <button (click)="doSearchConcatenatedUrl()">Search (Concatenated URL)</button>
    <button (click)="doSearchHttpParams1()">Search (HttpParams1)</button>
    <button (click)="doSearchHttpParams2()">Search (HttpParams2)</button> 
    <p>JSON {{_result | json }} </p>
  `,
  styles: []
})
export class AppComponent {
  _search = 'Atlanta';
  _result = {};
  
  constructor(private _http: HttpClient) {

  }
  doSearchConcatenatedUrl() {
    const concatenatedUrl: string = 
      "https://trailapi-trailapi.p.mashape.com?q[city-cont]=" + 
      encodeURIComponent(this._search);
    const mashapeKey = 
    'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
    const httpHeaders: HttpHeaders = new HttpHeaders(
      {'Content-Type': 'appplication/json',
      'X-Mashape-Key':mashapeKey}
    );
    this._http.get(concatenatedUrl, {headers: httpHeaders}).subscribe(
      res => { this._result = res }
    );
  }
  doSearchHttpParams1() {
    const url: string = 
      'https://trailapi-trailapi.p.mashape.com';
    const mashapeKey = 
      'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
    const httpHeaders = new HttpHeaders (
      {'Content-Type': 'appplication/json',
      'X-Mashape-Key':mashapeKey}      
    );
    const params = new HttpParams({
      fromString: 'q[city_cont]=' + this._search
    });
    this._http.get(url, {headers: httpHeaders, params: params}).subscribe(
      res => { this._result = res }
    );
  }
  doSearchHttpParams2() {
    const url: string = 
      'https://trailapi-trailapi.p.mashape.com';   
    const mashapeKey = 
      'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
    const httpHeaders = new HttpHeaders (
      {'Content-Type': 'appplication/json',
        'X-Mashape-Key':mashapeKey}      
    );
    const params = new HttpParams().set('q[city_cont]', this._search);
    this._http.get(url, {headers: httpHeaders, params: params}).subscribe(
      res => { this._result = res }
    );       
  }
}
