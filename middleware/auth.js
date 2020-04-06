const inSession = (req,res,next)=>{
    if(req.session.loged_in){
        next();
    }
    else{
        res.redirect("/login");
    }
}

module.exports = inSession;