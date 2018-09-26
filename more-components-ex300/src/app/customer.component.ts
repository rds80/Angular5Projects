<<<<<<< HEAD
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
>>>>>>> 5f91962b406990d75b063e028192a0e570d3f0d3

@Component({
  selector: 'app-customer',
  template: `
<<<<<<< HEAD
    <div class="customer" (click)="onClicked()">
=======
    <div class="customer">
>>>>>>> 5f91962b406990d75b063e028192a0e570d3f0d3
    {{[customer.name]}} | {{customer.city}}
    </div>
  `,
  styles: ['.customer {background-color:#fefbd8;margin:10px;padding:10px}']
})
export class CustomerComponent implements OnInit {
  @Input() customer;
<<<<<<< HEAD
  @Output() clicked: EventEmitter<String> = new EventEmitter<String>();
=======
>>>>>>> 5f91962b406990d75b063e028192a0e570d3f0d3

  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
  onClicked() {
    this.clicked.emit(this.customer.name);
  }

=======
>>>>>>> 5f91962b406990d75b063e028192a0e570d3f0d3
}
