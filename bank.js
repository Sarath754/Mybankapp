// name:ajay,acno:10023,bal:10000,username:test,password:test
// getData() is a method present inside class Bank

class Bank {

    static getData = () => {      


        var accountDetails = {

            userone: { acno: 1000, name: "ajay", balance: 1000, username: "userone", password: "testuser" },
            usertwo: { acno: 1001, name: "sajay", balance: 20000, username: "usertwo", password: "testuser1" },
            userthree: { acno: 1002, name: "vijay", balance: 25000, username: "userthree", password: "testuser2" },


        }
        return accountDetails
    }
    static login = () => {        //static login===bank.login in html call cheyan vendi
        let uname = document.querySelector("#username").value //userone
        let pwd = document.querySelector("#password").value //test
        let dataset = Bank.getData()

        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                alert("login successful")
                window.location.href = "user.html"
            }
            else {
                alert("incorrect password")
            }
        }
        else {
            alert("no user exist with provided username")
        }





    }
    static deposit = () => {
        let uname = document.querySelector("#uname").value
        let pwd = document.querySelector("#pwd").value
        let amt = Number(document.querySelector("#amt").value)
        let dataset = Bank.getData()
        if (uname in dataset) {
            if (dataset[uname].password == pwd) {

                dataset[uname].balance += amt
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
    static withdraw = () => {
        let uname = document.querySelector("#uname").value
        let pwd = document.querySelector("#pwd").value
        let amt = Number(document.querySelector("#amt").value)
        let dataset = Bank.getData()
        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                if (dataset[uname].balance >= amt) {



                    dataset[uname].balance -= amt
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
} 

// check uname present inside dataset


// check for 1000 acno exist or not
// if exist print personname
// console.log(1000 in accountDetails)

// if(1000 in accountDetails){
//     console.log(accountDetails[1000].name)
// }
// else{
//     console.log("acno does not exist")
// }

// var username="test"
// var password="test" 