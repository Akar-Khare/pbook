exports.logOut = ((req, res) => {

    
    res.clearCookie('jwtoken',{path:'/',sameSite:'none'});
    res.status(200).send("Logout successful")

})