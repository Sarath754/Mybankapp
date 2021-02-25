import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

//import{environment} from '../../environments/environment'

const apiurl=environment.apiurl

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) {



  }


  accountDetails: any = {

    userone: { acno: 1000, name: "Sarath", balance: 10000, username: "userone", password: "testuser", history: [] },
    usertwo: { acno: 1001, name: "prayag", balance: 20000, username: "usertwo", password: "testuser1", history: [] },
    userthree: { acno: 1002, name: "Raina", balance: 25000, username: "userthree", password: "testuser2", history: [] },


  };

  authenticateuser = (uname: string, pwd: string) => {

    return this.http.post(apiurl+"/login", {

      "username": uname,

      "password": pwd

    })

  }


  generateHeader = () => {

    //token store chyean
    
    let token=localStorage.getItem("token")


    let headers = new HttpHeaders();

    headers = headers.set("Authorization", "Bearer " +token) 
    return headers

  }
  // .subscribe((data)=>{

  //   console.log(data);
  // })


  // let dataset = this.accountDetails

  // if (uname in dataset) {
  //   if (dataset[uname].password == pwd) {
  //     alert("login successful")
  //     // this.router.navigateByUrl("/home");
  //   }
  //   else {
  //     alert("incorrect password")
  //   }
  // }
  // else {
  //   alert("no user exist with provided username")
  // }


  //......................................................................................

  //deposit = (uname: string, pwd: string, amt: any) => {

  deposit = (amt: any) => {


    return this.http.post(apiurl+"/deposit", {



      "amount": amt



    },

      {
        headers: this.generateHeader()
      });

  }

  // let user = this.authenticateuser(uname, pwd);

  // //alert("deposit")  

  // let dataset = this.accountDetails;

  // if (uname in dataset) {
  //   if (dataset[uname].password == pwd) {

  //     dataset[uname].balance += parseInt(amt);
  //     //.........

  //     dataset[uname].history.push({

  //       amount: amt, typeOfTransaction: 'credit'
  //     });
  //     //...........
  //     alert("your account credited with amount" + amt + "avail bal=" + dataset[uname].balance)
  //   }
  //   else {
  //     alert("incorrect password")
  //   }
  // }
  // else {
  //   alert("no user exist with provided username")
  // }




  withdraw = (amt: number) => {



    //let headers = new HttpHeaders();

    //headers = headers.set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJvbmUiLCJpYXQiOjE2MTI5NzU2NDl9.N6hCPTQIVVYDAzpPTNYTt-4g8Rc9eevIT2_41KWp4RY")


    return this.http.post(apiurl+"/withdraw", {



      "amount": amt



    },

      {
        headers: this.generateHeader()
      });


    // let user = this.authenticateuser(uname, pwd);

    // let dataset = this.accountDetails
    // if (uname in dataset) {
    //   if (dataset[uname].password == pwd) {
    //     if (dataset[uname].balance >= amt) {



    //       dataset[uname].balance -= amt;
    //       //...........
    //       dataset[uname].history.push({

    //         amount: amt, typeOfTransaction: 'debit'
    //       });

    //       //.................
    //       alert("your account debited with amount" + amt + "avail bal=" + dataset[uname].balance)

    //     }
    //     else {
    //       alert("insufficient balance")
    //     }
    //   }
    //   else {
    //     alert("no user exist with provided username")
    //   }
    // }



  }



  getHistory = () => {

    // let headers = new HttpHeaders();

    // headers = headers.set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJvbmUiLCJpYXQiOjE2MTI5NzU2NDl9.N6hCPTQIVVYDAzpPTNYTt-4g8Rc9eevIT2_41KWp4RY")


    return this.http.get(apiurl+"/history", {



      headers: this.generateHeader()
    });

  }




  getProfile = () => {

    
    return this.http.get(apiurl+"/profile", {



      headers: this.generateHeader()
    });

  }




}

