const express = require("express");
const app = express();
const exphbs= require("express-handlebars");
const productsModel = require("./model/product");
const bsellingproducts = require("./model/bestseller");
const products1 = require("./model/product1");
const products2 = require("./model/products2");
const products3 = require("./model/product3");
const products4 = require("./model/product4");
const bodyParser = require('body-parser');

require('dotenv').config({path:"./configure/keys.env"})

app.engine("handlebars",exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/",(req,res)=>{
    res.render("home",{
        title: "One For All",
        products: productsModel.getAllProducts(),
        bseller: bsellingproducts.getAllProducts(),
    });
});

app.get("/products",(req,res)=>{
    res.render("products",{
        title: 'Products',
        products: productsModel.getAllProducts()
    });
});

app.get("/products1",(req,res)=>{
    res.render("products1",{
        title: 'Watch',
        products: products1.getAllProducts()
    });
});

app.get("/products2",(req,res)=>{
    res.render("products2",{
        title: 'Sunglasses',
        products: products2.getAllProducts()
    });
});

app.get("/products3",(req,res)=>{
    res.render("products3",{
        title: 'Computer Accessories',
        products: products3.getAllProducts(),
    });
});

app.get("/products4",(req,res)=>{
    res.render("products4",{
        title: 'Perfumes',
        products: products4.getAllProducts()
    });
});
app.get("/login",(req,res)=>{
    res.render("login",{
        title: 'Login',
    });
});

app.get("/registration",(req,res)=>{
    res.render("registration",{
        title: 'Registration',
    });
});

app.get("/dashboard",(req,res)=>{
    res.render("dashboard",{
        title: 'One For All',
    });
});

app.post("/loginvalidation",(req,res)=>{
    const errorMsg = [];
    const errorMsg1 = [];
    if(req.body.email === ""){
        errorMsg.push("Please enter your Email");
    }

    if(req.body.password === ""){
        errorMsg1.push("Please enter your Password");
    }

    if(errorMsg.length > 0 || errorMsg1.length > 0){
        res.render("login",{
            title: 'Login',
            errId: errorMsg,
            errPass: errorMsg1,
            id: req.body.email,
            pass: req.body.password,
        });
    }
    else{
        res.render("login",{
            title: 'login',
            msg: "Successfully loged IN",
        });
    }
});

app.post("/registrationvalidation",(req,res)=>{
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
            title: 'Registration',
            errName: errorMsg,
            errId: errorMsg1,
            errPass: errorMsg2,
            name: req.body.name,
            id: req.body.email,
            pass: req.body.password,
        });
    }
    else{
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: `${req.body.email}`,
            from: 'oneforall@one.com',
            subject: 'Its working',
            text: 'One For All',
            html: 'Thank You for registering with <strong>one for all</strong>, We hope you have a wonderful journey on our site.',
        };
        sgMail.send(msg)
        .then(()=>{
            res.render("dashboard",{
                title: "One For All",
                name: req.body.name,
            });
        })
        .catch(err=>{
            console.log(`Error ${err}`);
        })
    }
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Website is Up and Running`);
});