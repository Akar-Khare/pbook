const User = require('../schema/UserSchema');


exports.signIn = (async (req, res) => {

  const {email,password } = req.body;
  console.log("REQ BODY:"+email,password);


    if( !email || !password)
      res.status(422).json({error: "Bad Login"});
      try {  
  
        const matchingUser = await User.findOne({email : email});
    
    
        if(matchingUser){
         if(password === matchingUser.password){

          const token = await matchingUser.generateAuthToken();
          console.log("token:"+token)
          
          // res.append("Access-Control-Allow-Origin","https://pictbook.onrender.com")

          res.cookie("jwtoken",token,{

            expires: new Date(Date.now()+86400000),
            httpOnly: true,
            secure:true,
            sameSite:'none'
            
          });
        // console.log(res);
        //  res.status(201).json({message: "User login successful"}) ;
        res.send({message: "User login successful"}) ;
         }
         else
         res.status(422).json({error: "Wrong Password"});
    
        }
        // else  res.status(422).json({error: "Invalid email address"});
    
      }
      catch(err){
        console.log(err);
      }

})