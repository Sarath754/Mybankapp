var express = require('express');
var router = express.Router();
var bankService = require('../services/bankservice')

const jwt = require('jsonwebtoken');
//const User = require('../models/user');

const jwtsecret = "scerectkey@#$"

const authMiddleware = (req, res, next) => {


  try {
    //console.log(req.headers.authorization)

    const token = req.headers.authorization.split(" ")[1];

    const user = jwt.verify(token, jwtsecret)

    req.user = user;
    next()

    // console.log(decoded)
  }

  catch {
    //status code
    res.status(401).send({ message: "invalid details" })


  }


}
/* GET home page. */
router.get('/', function (req, res, next) {
  // const user=new User({
  //   acno:200,
  //   balance:20000,
  //   username:"usertwo",
  //   password:"testuser1",
  //   history:[]


  // })

  // user.save()


  //promisis

  User.findOne({

    username: req.body.username,

    password: req.body.password


  })

    .then(data => {

      res.send(data);
    })

  //res.render('index', { title: 'Express' });
});

router.post('/login', function (req, res, next) {


  // return  User.findOne({

  //     username: req.body.username,

  //     password: req.body.password


  //   })

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





  bankService.authenticateuser(req.body.username, req.body.password)

    .then(user => {




      if (user ) {

        const token = jwt.sign({

          username: req.body.username

        }, jwtsecret);

        //const decoded=jwt.verify(token,"scerectkey@#$")

        res.send({
          message: "Logged in sucessfully",
          token: token,
          // decoded 
        });

      }
      else {
        //status code
        res.status(422).send({ message: "invalid credentials" })
      }
    });

})


router.post('/deposit', authMiddleware, function (req, res, next) {


   bankService.deposit(req.user.username, req.body.amount)
   .then(message=>{

    res.send(message);

   })

 
  // console.log(decoded)


});



router.post('/withdraw', authMiddleware, function (req, res, next) {



   bankService.withdraw(req.user.username, req.body.amount)

.then(message=>{

    res.send(message);

   })

 

});


router.get('/history', authMiddleware, function (req, res, next) {



  const message = bankService.history(req.user.username)

  res.send(message)

})


module.exports = router;
