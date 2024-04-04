import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {Customer} from "../../model/customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{
  public customer: Array<Customer> = [];
 public  citys: Array<{ city: string, population: string }> = [
   {city: "Porto", population: "214.349"},
   {city: "Braga", population: "174.000"},
   {city: "Vila Real", population: "17.345"},
   {city: "Lisboa", population: "504.718"},
   {city: "Viana do Castelo", population: "85.784"}
 ];

  constructor(private customerService: CustomerService) { }
  ngOnInit(): void {
    //this.customers = this.customerServive.getCustomers();
    this.customerService.emissorDeEvento.subscribe(
      res => alert(`As a customer, I was notified with the message: ${res}`)
    )
    //this.getCustomers();
  }

  deleteCustomer(telephone: any, cc: any) {

  }

  submitForm(form: NgForm) {
    if(form.invalid){
      alert("Not valid")
    }
    console.log(form.value);
    form.reset();

  }


  addCustomer(telephone: any, cc: any, _name: any, address: any) {

  }

  modifyCustomer(telephone: any, cc: any, _name: any, address: any) {

  }
}
