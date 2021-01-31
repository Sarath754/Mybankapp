import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // username = "";
  // password = "";


  // constructor(private bankService:BankService,private router:Router){

  // }

  //reactive forms method 
  loginform = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required , Validators.minLength(5)]]
  });

  constructor(private bankService: BankService, private router: Router, private fb: FormBuilder) {

  }


  // constructor() { ab }

  // ngOnInit(): void {
  // }

  // onUsernameChange(event: any) {



  //   this.username = event.target.value

  // }

  // onPasswordChange(event: any) {

  //   this.password = event.target.value

  // }

  // login() {

  //   const user = this.bankservice.authenticateuser(this.username, this.password);

  //   this.router.navigateByUrl("/home")

  // }

  // login(username:string,password:string) {

  //   const user = this.bankService.authenticateuser(username, password);

  //   this.router.navigateByUrl("/home")

  // }

  login() {

    if (this.loginform.valid == false) {

      // if (this.loginform.controls.username.errors) {

      //   alert("invalid username")
      // }

      // else if (this.loginform.controls.password.errors) {

      //   alert("invalid password")




        // console.log(this.loginform.get("username")?.errors)

        alert("form is invalid")
      }

      else {
        const username = this.loginform.value.username

        const password = this.loginform.value.password



        const user = this.bankService.authenticateuser(username, password);

        this.router.navigateByUrl("/home")
      }


      // const username=this.loginform.value.username

      // const password=this.loginform.value.password



      // const user = this.bankService.authenticateuser(username, password);

      // this.router.navigateByUrl("/home")

    }


  }
