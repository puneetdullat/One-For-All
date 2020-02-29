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
        })
    }
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Website is Up and Running`);
});