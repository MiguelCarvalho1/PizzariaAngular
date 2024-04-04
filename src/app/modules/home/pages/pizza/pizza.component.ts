import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export class PizzaComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private activatedRouted: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.emissorDeEvento.subscribe(
      res => alert(`I make pizza, I was notified with the message: ${res}`)
    )


// route parameters
  this.activatedRouted.params.subscribe(
    res => console.log("Id: " + res['id'], "User: " + res['user'], res)
)

//query parameters
  this.activatedRouted.queryParams.subscribe(
    res => console.log("Name: " + res['name'], res)
)


    // Redirection
  /*setInterval(() => {
      //this.router.navigate(['/']);
      this.router.navigateByUrl('/');
  }, 3000)
  */
}

}
