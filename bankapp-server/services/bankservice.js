const User = require('../models/user');

let accountDetails = {

    userone: { acno: 1000, name: "Sarath", balance: 10000, username: "userone", password: "testuser", history: [] },
    usertwo: { acno: 1001, name: "prayag", balance: 20000, username: "usertwo", password: "testuser1", history: [] },
    userthree: { acno: 1002, name: "Raina", balance: 25000, username: "userthree", password: "testuser2", history: [] },


};


const authenticateuser = (username, password) => {
    return User.findOne({

        username: username,

        password: password


    })

    // .then(data => {

    //   if (data) {

    //     res.send({

    //       message: "logged in succesfully"

    //     });

    //   }
    //   else {
    //     //status code
    //     res.status(422).send({ message: "invalid credentials" })
    //   }


    // })
    //static login===bank.login in html call cheyan vendi

    // let dataset = accountDetails;

    // if (username in dataset) {
    //     if (dataset[username].password == password) {

    //         return 1;


    //     }
    //     else {
    //         return 0;

    //     }
    // }
    // else {

    //     return -1;

    // }

}





const deposit = (username, amount) => {

    return User.findOne({

        username:username
    })
        .then(user => {
            user.balance += amount

            user.history.push({

                amount,
                typeOfTransaction: "credit"
            })

            user.save();


            return {

                balance: user.balance,
                message: "your accont has been credited with" + amount + "newbalance" + user.balance

            };

        })

}
// let user = authenticateuser(username, password);

// if (user == 1) {


//     accountDetails[username].balance += amount

//     accountDetails[username].history.push({

//         amount: amount,
//         typeOfTransaction: "credit"

//     })

//     return {
//         balance: accountDetails[username].balance,

//         message: "your accont has been credited with" + amount + "newbalance" + accountDetails[username].balance
//     }

// }

//     else {
//         return {message:"invalid credits"}
//     }


// }


const withdraw = (username, amount) => {

    return User.findOne({

        username:username
    })
        .then(user => {
            if (user.balance < amount) {

                return { message: "Insufficient balance" }
            }

            user.balance -= amount;

            user.history.push({

                amount: amount,
                typeOfTransaction: "debit"

            });
            user.save();

            return {

                balance:user.balance,
             message: accountDetails[username].balance, message: "your account has been debited with" + amount + "newbalance" + user.balance 

            }


        })




    // let user = authenticateuser(username, password);

    // if (user == 1) {

    // console.log(accountDetails[username].balance)

    // if (accountDetails[username].balance < amount) {

    //     return { message: "insufficient balance" }
    // }



    // accountDetails[username].balance -= amount

    // accountDetails[username].history.push({

    //     amount: amount,
    //     typeOfTransaction: "debit"

    // });


    // return { balance: accountDetails[username].balance, message: "your account has been debited with" + amount + "newbalance" + accountDetails[username].balance }


}

//     else {

//         return {message:"invalid details"}
//     }

// }


const getUser = (username, password) => {

    //     let user=authenticateuser(username,password);

    // if(user==1){

    return User.findOne({username})
    //return accountDetails[username].history

}

// else{  

//     return [];
// }

// }





module.exports = {

    authenticateuser,
    deposit, withdraw, getUser
    

}