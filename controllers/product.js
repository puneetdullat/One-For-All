const express = require('express')
const router = express.Router();

const productsModel = require("../model/product");

router.get("/products",(req,res)=>{
    res.render("products",{
        title: 'Products',
        products: productsModel.fakeDB.prod
    });
});

router.get("/products1",(req,res)=>{
    res.render("products",{
        title: 'Watch',
        products: productsModel.fakeDB.prod1
    });
});

router.get("/products2",(req,res)=>{
    res.render("products",{
        title: 'Sunglasses',
        products: productsModel.fakeDB.prod2
    });
});

router.get("/products3",(req,res)=>{
    res.render("products",{
        title: 'Computer Accessories',
        products: productsModel.fakeDB.prod3
    });
});

router.get("/products4",(req,res)=>{
    res.render("products",{
        title: 'Perfumes',
        products: productsModel.fakeDB.prod4
    });
});

module.exports = router;