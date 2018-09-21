import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input #input type="text" (input)="textInput($event)" value=""/>
  <hr>
  Upper-Case: {{upperCase}}
  <br/>
  Lower-Case: {{lowerCase}} 
  `,
  styles: []
})
export class AppComponent {
  upperCase: string = '';
  lowerCase: string = '';
  text: string = '';
  @ViewChild('input') inputBox;
  textInput(event) {
    this.text = event.target.value;
    this.upperCase = this.text.toUpperCase();
    this.lowerCase = this.text.toLowerCase();
  } 
  ngAfterViewInit() {
    this.inputBox.nativeElement.focus();
  }
}
