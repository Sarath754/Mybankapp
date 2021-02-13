import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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


  // username = "";
  // password = "";
  // amount :number= 0;
//amount="";

  // constructor(private bankService: BankService, private router:Router ) { }

  homeForm=this.fb.group({

    username:[""],
    password:[""],
    amount:[0]

  })

  constructor(private bankService: BankService, private router:Router ,private fb:FormBuilder) { }
  // ngOnInit(): void {
    
  // }




  // onUsernameChange(event: any) {



  //   this.username = event.target.value

  // }

  // onPasswordChange(event: any) {

  //   this.password = event.target.value

  // }

  // onAmountChange(event: any) {

  //   this.amount = event.target.value

  // }


  deposit() {

    const username= this.homeForm.value.username

    const password=this.homeForm.value.password

    const amount=parseInt(this.homeForm.value.amount)




    this.bankService.deposit(amount )
    
    
    .subscribe((data:any)=>{

      alert(data.message);
     // console.log(data)
    })



    //alert("deposit sucess")
    // this.router.navigateByUrl("/history");
  }



  withdraw() {

    const username= this.homeForm.value.username

    const password=this.homeForm.value.password

    const amount=this.homeForm.value.amount


    this.bankService.withdraw( amount)

    .subscribe((data:any)=>{


      alert(data.message)
    })

   // this.router.navigateByUrl("/history");

  }


}
