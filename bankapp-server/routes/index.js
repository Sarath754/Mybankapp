var express = require('express');
var router = express.Router();
var bankService=require("../services/bankservices");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'welcome' });
});


router.post('/', function (req, res, next) {

  const result=bankService.authenticateuser(req.body.username,req.body.password);

  console.log(result)
  // res.send(result);





  if(result==1){
          

    res.send("logged in")
  }

  else{

    res.send("invalid credentials")
  }

  // console.log(result)

  // console.log(req.body)


  // res.render('index', { title: 'Express' });


});


router.post('/deposit',function(req,res){

  const message=bankService.deposit(req.body.username,req.body.password,req.body.amount);



res.send(message)

})

router.post('/withdraw',function(req,res){

  const message=bankService.withdraw(req.body.username,req.body.password,req.body.amount);



res.send(message)

})


module.exports = router;
