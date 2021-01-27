import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = "";
  password = "";




  constructor(private router: Router, private bankservice: BankService) {              //dependency injection

  }

  // constructor() { ab }

  // ngOnInit(): void {
  // }

  onUsernameChange(event: any) {



    this.username = event.target.value

  }

  onPasswordChange(event: any) {

    this.password = event.target.value

  }

  login() {

    const user = this.bankservice.authenticateuser(this.username, this.password);

    this.router.navigateByUrl("/home")

  }


}


