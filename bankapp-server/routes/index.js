var express = require('express');
var router = express.Router();
var bankService = require('../services/bankservice')

const jwt = require('jsonwebtoken');

const jwtsecret="scerectkey@#$"

const authMiddleware=(req,res,next)=>{


  try {
//console.log(req.headers.authorization)

const token=req.headers.authorization.split(" ")[1];

    const user = jwt.verify(token, jwtsecret)

    req.user=user;
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
  res.render('index', { title: 'Express' });
});

router.post('/login', function (req, res, next) {



  const result = bankService.authenticateuser(req.body.username, req.body.password)

  if (result == 1) {

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
    res.status(422).send({message:"invalid credentials"})
  }
});


router.post('/deposit',authMiddleware, function (req, res, next) {


    const message = bankService.deposit(req.user.username, req.body.amount);

    res.send(message);

   // console.log(decoded)
  

});



router.post('/withdraw',authMiddleware ,function (req, res, next) {



  const message = bankService.withdraw(req.user.username, req.body.amount)

  res.send(message)

});


router.get('/history',authMiddleware, function (req, res, next) {



  const message = bankService.history(req.user.username)

  res.send(message)

})


module.exports = router;
