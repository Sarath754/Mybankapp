import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';
// import{Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent

// implements OnInit 
{


  username = "";
  password = "";
  amount :number= 0;
//amount="";

  constructor(private bankService: BankService, private router:Router ) { }

  ngOnInit(): void {
    
  }




  onUsernameChange(event: any) {



    this.username = event.target.value

  }

  onPasswordChange(event: any) {

    this.password = event.target.value

  }

  onAmountChange(event: any) {

    this.amount = event.target.value

  }


  deposit() {

    this.bankService.deposit(this.username, this.password, this.amount);

    //alert("deposit sucess")
     this.router.navigateByUrl("/history");
  }



  withdraw() {
    this.bankService.withdraw(this.username, this.password, this.amount);

    this.router.navigateByUrl("/history");

  }


}
