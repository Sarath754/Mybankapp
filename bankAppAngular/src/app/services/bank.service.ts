import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {


  accountDetails: any = {

    userone: { acno: 1000, name: "Sarath", balance: 10000, username: "userone", password: "testuser", history: [] },
    usertwo: { acno: 1001, name: "prayag", balance: 20000, username: "usertwo", password: "testuser1", history: [] },
    userthree: { acno: 1002, name: "Raina", balance: 25000, username: "userthree", password: "testuser2", history: [] },


  };

  authenticateuser = (uname: string, pwd: string) => {        //static login===bank.login in html call cheyan vendi

    let dataset = this.accountDetails

    if (uname in dataset) {
      if (dataset[uname].password == pwd) {
        alert("login successful")
        // this.router.navigateByUrl("/home");
      }
      else {
        alert("incorrect password")
      }
    }
    else {
      alert("no user exist with provided username")
    }

  }
  //......................................................................................

  deposit = (uname: string, pwd: string, amt: any) => {

    let user = this.authenticateuser(uname, pwd);

    //alert("deposit")  

    let dataset = this.accountDetails;

    if (uname in dataset) {
      if (dataset[uname].password == pwd) {

        dataset[uname].balance += parseInt(amt);
        //.........

        dataset[uname].history.push({

          amount: amt, typeOfTransaction: 'credit'
        });
        //...........
        alert("your account credited with amount" + amt + "avail bal=" + dataset[uname].balance)
      }
      else {
        alert("incorrect password")
      }
    }
    else {
      alert("no user exist with provided username")
    }

  }

  withdraw = (uname: string, pwd: string, amt: number) => {
    
    let user = this.authenticateuser(uname, pwd);

    let dataset = this.accountDetails
    if (uname in dataset) {
      if (dataset[uname].password == pwd) {
        if (dataset[uname].balance >= amt) {



          dataset[uname].balance -= amt;
          //...........
          dataset[uname].history.push({

            amount: amt, typeOfTransaction: 'debit'  
          });

          //.................
          alert("your account debited with amount" + amt + "avail bal=" + dataset[uname].balance)

        }
        else {
          alert("insufficient balance")
        }
      }
      else {
        alert("no user exist with provided username")
      }
    }



  }
  getHistory=() =>{

    let dataset = this.accountDetails;
    return dataset["userone"].history;
  }

}
