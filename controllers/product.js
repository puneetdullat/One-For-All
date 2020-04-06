const express = require('express')
const router = express.Router();
const saleModel = require("../model/prodSale");
const productsModel = require("../model/product");
const path = require("path");
const inSession = require("../middleware/auth");

router.get("/products",(req,res)=>{
    saleModel.find()
    .then((products)=>{
        const filteredprod =   products.map(prod=>{
            return {
                id: prod._id,
                title: prod.title,
                price: prod.price,
                description: prod.description,
                best: prod.best,
                photo: prod.photo
            }
        });
        res.render("products",{
            data : filteredprod
         }); 
    })
    .catch(err=>console.log(`Error pulling data from the database ${err}`));
    
    
    
    
    /* res.render("products",{
        title: 'Products',
        products: productsModel.fakeDB.prod
    });*/
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

router.get("/")

router.get("/add",inSession,(req,res)=>{
    res.render("productAdd",{
        title: 'Add Products'
    });
});

router.post("/addproduct",(req,res)=>{
    const newProd = {
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        category:req.body.category,
        quantity:req.body.quantity,
        best:req.body.best
    }
    titlemsg = [];
    pricemsg = [];
    descmsg = [];
    catemsg = [];
    quanmsg = [];
    if(req.body.title === ""){
        titlemsg.push("Please enter a title for the product");
    }
    if(req.body.price === ""){
        pricemsg.push("Please enter a price for the product");
    }
    if(req.body.description === ""){
        descmsg.push("Please enter a description for the product");
    }
    if(req.body.category === ""){
        catemsg.push("Please enter a category for the product");
    }
    if(req.body.quantity === ""){
        quanmsg.push("Please enter a quantity for the product");
    }

    if(titlemsg.length > 0 || pricemsg.length > 0 || descmsg.length > 0 || catemsg.length > 0 || quanmsg.length > 0){
        res.render("productAdd",{
            title: 'Add Products'
        });
    }
    else{
        const pro = new saleModel(newProd)
        pro.save()
        .then((value)=>{
            req.files.photo.name = `prod_pic_${value._id}${path.parse(req.files.photo.name).ext}`;
            req.files.photo.mv(`public/img/${req.files.photo.name}`)
            .then(()=>{
                saleModel.updateOne({_id:value._id},{
                    photo : req.files.photo.name
                })
                .then(()=>{
                    res.render("home");
                })
                .catch()
            })
            .catch()
        })
        .catch(err=>console.log(`Error while saving new product in database ${err}`));
    }
});


module.exports = router;