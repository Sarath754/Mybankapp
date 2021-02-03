let accountDetails = {

    userone: { acno: 1000, name: "Sarath", balance: 10000, username: "userone", password: "testuser", history: [] },
    usertwo: { acno: 1001, name: "prayag", balance: 20000, username: "usertwo", password: "testuser1", history: [] },
    userthree: { acno: 1002, name: "Raina", balance: 25000, username: "userthree", password: "testuser2", history: [] },


};



const authenticateuser = (username, password) => {        //static login===bank.login in html call cheyan vendi

    let dataset = accountDetails;

    if (username in dataset) {
        if (dataset[username].password == password) {

            return 1;
            // alert("login successful")
            // this.router.navigateByUrl("/home");
        }
        else {
            return 0;
            // alert("incorrect password")
        }
    }
    else {

        return -1;
        // alert("no user exist with provided username")
    }

}

const deposit = (username, password, amount) => {

    let user = authenticateuser(username, password);

    if (user == 1) {


        accountDetails[username].balance += amount

        accountDetails[username].history.push({

            amount: amount,
            typeOfTransaction: "credit"

        })
        return "your accont has been credited with" + amount + "newbalance" + accountDetails[username].balance

    }

    else {
        return "invalid credits"
    }




}

const withdraw = (username, password, amount) => {

    let user = authenticateuser(username, password);

    if (user == 1) {

        console.log(accountDetails[username].balance)

        if (accountDetails[username].balance < amount) {

            return "insufficient balance"
        }



        accountDetails[username].balance -= amount

        accountDetails[username].history.push({

            amount: amount,
            typeOfTransaction: "debit"

        });

        return "your account has been debited with" + amount + "newbalance" + accountDetails[username].balance

    }

    else {

        return "invalid details"
    }

}

module.exports = {

    authenticateuser,
    deposit,
    withdraw
}
