var express = require('express');
var router = express.Router();
var bankService=require("../services/bankservices");

const jwt=require("jsonwebtoken");

const jwtSecret="secretkey!$@"

const authMiddleware =(req,res,next)=>{

  try{

    const token=req.headers.authorization.split("")[1];

    //console.log(req.headers.authorization)

  


    const user=jwt.verify(token,jwtSecret)
          
    req.user=user;
    
  next()
    
       

  }

 catch{
res.send({message:"invalid details"})

 }


}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'welcome' });
});


router.post('/login', function (req, res, next) {

  const result=bankService.authenticateuser(req.body.username,req.body.password);

  console.log(result)
  // res.send(result);

  if(result==1){

    const token=jwt.sign({

username:req.body.username },jwtSecret);

   


    const decoded=jwt.verify(token,jwtSecret)
          

    // res.send({message:"logged in",token:"&&hbhygv*"})

    res.send({
      message:"logged in succesfully",
      token:token,
      decoded
    })
    
  }

  else{

    res.send({
      message:"invalid credentials"})
  }

  // console.log(result)
  // console.log(req.body)
  // res.render('index', { title: 'Express' });
  
});


// router.post('/deposit',function(req,res){

//   const message=bankService.deposit(req.body.username,req.body.password,req.body.amount);

// res.send(message)

 router.post('/deposit',authMiddleware, function(req,res){

  
    const decoded=jwt.verify(req.body.token,jwtSecret)
          
  
    
       const message=bankService.deposit(req.user.username,req.body.amount);
       res.send(message)

  


})




router.post('/withdraw',authMiddleware, function(req,res){


//   try{
//     const decoded=jwt.verify(req.body.token,"secretkey!$@")
          
  
    
//        const message=bankService.withdraw(decoded.username,req.body.amount);
//        res.send(message)

//   }

//  catch{
// res.send({message:"invalid details"})

//  }


const decoded=jwt.verify(req.body.token,jwtSecret)

  const message=bankService.withdraw(req.user.username,req.body.amount);



res.send(message)

})







router.get('/history',authMiddleware ,function(req,res){

  // const decoded=jwt.verify(req.user.username.token,"secretkey!$@")

  const message=bankService.history(req.user.username);



res.send(message)

})


module.exports = router;
