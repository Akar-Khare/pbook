exports.logOut = ((req, res) => {

    
    res.clearCookie('jwtoken',{path:'/',sameSite:'none',secure:true});
    res.status(200).send("Logout successful")

})