const express = require('express')
const router = express.Router();
const productsModel = require("../model/product");
const regModel = require("../model/regUser");
const bcrypt = require("bcryptjs");
const inSession = require("../middleware/auth");
const saleModel = require("../model/prodSale");
const dashboardSelector = require("../middleware/authorization");
const isAdmin = require("../middleware/isAdmin");


router.get("/",(req,res)=>{
    saleModel.find()
    .then((products)=>{
        const filteredprod = products.map(prod=>{
            return {
                id: prod._id,
                title: prod.title,
                price: prod.price,
                description: prod.description,
                best: prod.best,
                photo: prod.photo,
                category: prod.category
            }
        });
        res.render("home",{
            products: productsModel.fakeDB.prod,
            bseller : filteredprod
         }); 
    })
    .catch(err=>console.log(`Error pulling data from the database ${err}`));
});


router.get("/login",(req,res)=>{
    res.render("login");
});

router.get("/registration",(req,res)=>{
    res.render("registration");
});

router.get("/dashboard",inSession,dashboardSelector);

router.post("/loginvalidation",(req,res)=>{
    const errorMsg = [];
    const errorMsg1 = [];
    if(req.body.email === ""){
        errorMsg.push("Please enter your Email");
    }

    if(req.body.password === ""){
        errorMsg1.push("Please enter your Password");
    }
    regModel.findOne({email:req.body.email})
    .then((value)=>{
        if(value===null){
            if(req.body.email !== ""){
                errorMsg.push("Your email or password is wrong");
            }
            res.render("login",{
                errId: errorMsg,
                errPass: errorMsg1,
                id: req.body.email,
                pass: req.body.password,
            });
        }
        else{
            bcrypt.compare(req.body.password,value.password)
            .then((success)=>{
                if(success == true){
                    req.session.loged_in = value;
                    res.redirect("/dashboard")
                }
                else{
                    if(req.body.password !== ""){
                        errorMsg1.push("Your email or password is wrong");
                    }
                    res.render("login",{
                        errId: errorMsg,
                        errPass: errorMsg1,
                        id: req.body.email,
                        pass: req.body.password,
                    });
                }
            })
            .catch(err=>console.log(`Error while checking for password`));
        }
    })
    .catch(err=>console.log(`Error while checking for Email ${err}`));
});

router.post("/registrationvalidation",(req,res)=>{
    const newUser = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }
    const errorMsg = [];
    const errorMsg1 = [];
    const errorMsg2 = [];
    const reg = /[\w-]+@([\w-]+\.)+[\w-]+/;
    const len = req.body.password.length;
    if(req.body.name === ""){
        errorMsg.push("Please enter your Name");
    }

    if(req.body.email === ""){
        errorMsg1.push("Please enter your Email");
    }

    if(!(req.body.email === "") && !(req.body.email.match(reg))){
        errorMsg1.push("Please enter your Email in correct format");
    }

    if(req.body.password === ""){
        errorMsg2.push("Please enter your Password");
    }
    
    if(!(req.body.password === "") && len < 6 || len > 16){
        errorMsg2.push("Password must be between 6 and 16 characters");
    }
    
    if(!(req.body.password === "") && !(req.body.password.match(/[0-9]/))){
        errorMsg2.push("Password must contain number");
    }

    if(!(req.body.password === "") && !(req.body.password.match(/[A-Z]/))){
        errorMsg2.push("Password must contain a upper case letter");
    }

    if(!(req.body.password === "") && (req.body.password.match(/\s/))){
        errorMsg2.push("Password must not contain a whitespace");
    }

    if(errorMsg.length > 0 || errorMsg1.length > 0 || errorMsg2.length > 0){
        res.render("registration",{
            errName: errorMsg,
            errId: errorMsg1,
            errPass: errorMsg2,
            name: req.body.name,
            id: req.body.email,
            pass: req.body.password,
        });
    }
    else{
        const reg = new regModel(newUser);
        reg.save()
        .then(()=>{
            const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: `${req.body.email}`,
            from: 'oneforall@one.com',
            subject: 'New User Registration',
            text: 'One For All',
            html: 'Thank You for registering with <strong>one for all</strong>, We hope you have a wonderful journey on our site.',
        };
        sgMail.send(msg)
        .then(()=>{
            res.redirect("/dashboard");
        })
        .catch(err=>{
            console.log(`Error sending email ${err}`);
        })
        })
        .catch((err)=>{
            errorMsg1.push("Email already registered.");
            res.render("registration",{
                errName: errorMsg,
                errId: errorMsg1,
                errPass: errorMsg2,
                name: req.body.name,
                id: req.body.email,
                pass: req.body.password,
            });
            console.log(`Error while saving in Database ${err}`);
        });
    }
});

router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/login");
})

module.exports = router;