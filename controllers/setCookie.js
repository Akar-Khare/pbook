
const User = require('../schema/UserSchema');
exports.setCookie = (async (req, res) => {
    
    const {email,password } = req.body;
    console.log(req)
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
       
     });
   // console.log(res);
   //  res.status(201).json({message: "User login successful"}) ;
   res.status(201).json({message: "User login successful"}) ;
    }}
    })