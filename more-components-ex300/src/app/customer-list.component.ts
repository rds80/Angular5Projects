import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  template: `
    <div class="customerList">
      <p>
        [customer list]
      </p>
      <app-customer *ngFor="let customer of customerList" [customer]="customer"
        (clicked)="onCustomerClicked($event)">
      </app-customer>       
    </div>
  `,
  styles: ['.customerList{background-color:#8oced6;margin:10px;padding:10px}']
})
export class CustomerListComponent implements OnInit {
  private customerList = [
    {name: 'Brian', city: 'Atlanta'},
    {name: 'Peter', city: 'San Francisco'},
    {name: 'Janet', city: 'Colorado'}
  ]

  constructor() { }

  ngOnInit() {
  }

  onCustomerClicked(customerName:String) {
    alert('Customer Clicked:' + customerName);
  }

}
