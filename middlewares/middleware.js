const User = require('../schema/UserSchema');
const jwt = require('jsonwebtoken');

exports.isAuthenticated = (

    async (req, res, next) => {
        //console.log("Cookies was "+JSON.stringify(req.cookies)+"ended");
        const { jwtoken } = req.cookies;
      
      
        console.log("PATH :"+ (req.route.path));
        if(!jwtoken){  
            console.log("No token");
        if(req.route.path !=="/users" && req.route.path!== "/setCookie") 
            return res.status(401).json({error:"Unauthorized"});
        }
        else{
        const userData = jwt.verify(jwtoken, process.env.SECRET);
        req.user = await User.findById(userData._id);
        }//console.log("UserId: "+req.user);
        

        next();

        
})

