const dashboardSelector = (req,res)=>{
    if(req.session.loged_in.type === "admin"){
        res.render("adminDashboard")
    }
    else{
        res.render("dashboard");
    }
}

module.exports = dashboardSelector;