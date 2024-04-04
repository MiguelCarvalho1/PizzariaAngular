import { NgModule} from '@angular/core';
import {CustomerComponent} from "./pages/customer/customer.component";
import {PizzaComponent} from "./pages/pizza/pizza.component";
import {HomeComponent} from "./pages/home/home.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CustomerComponent,
    PizzaComponent,
    HomeComponent
  ],
  exports: [CustomerComponent, PizzaComponent]
})
export class HomeModule {

}
