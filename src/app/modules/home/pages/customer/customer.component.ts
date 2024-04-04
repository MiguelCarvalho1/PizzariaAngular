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



  public submitForm(form: NgForm) {
    if(form.invalid){
      alert("Not valid")
    }
    console.log(form.value);
    form.reset();

  }
  private getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: (res) => this.customer = res,
      error: (err) => console.log(err)
    })
  }


  public addCustomer(telephone: any, cc: any, _name: any, address: any) {
    var customer: Customer = {
      id: {
        telephone: telephone,
        cc: cc
      },
      name: _name,
      address: address
    };

    this.postCustomer(customer);

  }

 public  modifyCustomer(telephone: any, cc: any, _name: any, address: any) {
    var customer: Customer = {
      id: {
        telephone: telephone,
        cc: cc
      },
      name: _name,
      address: address
    };

    this.putCustomer(customer);

  }

  public postCustomer(customer: Customer) {
    return this.customerService.postCustomer(customer).subscribe({
      next: () => this.getCustomers(),
      error: (err) => console.log(err)
    });
  }

  public putCustomer(customer: Customer) {
    return this.customerService.putCustomer(customer).subscribe({
      next: () => this.getCustomers(),
      error: (err) => console.log(err)
    });
  }

  public  deleteCustomer(telephone: any, cc: any) {
    return this.customerService.deleteCustomer(telephone, cc).subscribe({
      next: () => {
        this.customer = this.customer.filter(
          item => {
            return !(telephone == item.id.telephone && cc == item.id.cc)
          }
        )
      },
      error: (err) => console.log(err)
    });

  }

  public exit(): boolean {
    if(confirm('Do you really want to leave?')) {
      return true;
    }
    return false;
  }
}
