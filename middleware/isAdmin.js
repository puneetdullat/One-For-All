const isAdmin = (req,res,next)=>{
    if(req.session.loged_in.type === "admin"){
        next();
    }
    else{
        res.redirect("/login");
    }
}

module.exports = isAdmin;