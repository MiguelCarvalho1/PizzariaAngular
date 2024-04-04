import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private login: LoginService) { }

  ngOnInit(): void {
  }

   public sendForm(form: any) {
     this.login.login(form.value['user'], form.value['password']);
     form.reset();
     alert("Token recovered, now you can try to access the features");

  }
}
