const express = require('express')
const router = express.Router();
const saleModel = require("../model/prodSale");
const productsModel = require("../model/product");
const path = require("path");
const inSession = require("../middleware/auth");

router.get("/productlist",(req,res)=>{
    saleModel.find()
    .then((products)=>{
        const filteredprod = products.map(prod=>{
            return {
                id: prod._id,
                title: prod.title,
                price: prod.price,
                category: prod.category,
                quantity: prod.quantity,
                best: prod.best,
            }
        });
        res.render("list",{
            data : filteredprod
         }); 
    })
    .catch(err=>console.log(`Error pulling data from the database ${err}`));
});

router.get("/edit/:id",(req,res)=>{
    saleModel.findById(req.params.id)
    .then((prod)=>{
        res.render("productEdit",{
            id: prod._id,
            title: prod.title,
            price: prod.price,
            description: prod.description,
            category: prod.category,
            quantity: prod.quantity,
            best: prod.best,
        });
    })
    .catch(err=>console.log(`Error while editing ${err}`));
});

router.put("/update/:id",(req,res)=>{
    const prod = {
        title:req.body.title,
        price:req.body.price,
        description: req.body.description,
        category: req.body.category,
        quantity: req.body.quantity,
        best: req.body.best,
    }
    saleModel.updateOne({_id:req.params.id},prod)
    .then(()=>{
        res.redirect("/product/productlist");
    })
    .catch(err=>console.log(`Error while updating to the database ${err}`))
})

router.delete("/delete/:id",(req,res)=>{
    saleModel.deleteOne({_id:req.params.id})
    .then(()=>{
        res.redirect("/product/productlist");
    })
    .catch(err=>console.log(`Error while deleting from the database ${err}`))
})

router.get("/products",(req,res)=>{
    saleModel.find()
    .then((products)=>{
        const filteredprod = products.map(prod=>{
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
});

router.post("/search",(req,res)=>{
    const to_redirect = req.body.search;
    if(to_redirect === "watch"){
        res.redirect("/product/products1")
    }
    if(to_redirect === "sunglasses"){
        res.redirect("/product/products2")
    }
    if(to_redirect === "perfume"){
        res.redirect("/product/products4")
    }
    if(to_redirect === "accessories"){
        res.redirect("/product/products3")
    }
});

router.get("/products1",(req,res)=>{
    saleModel.find({category:'watch'})
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
});

router.get("/products2",(req,res)=>{
    saleModel.find({category:'sunglasses'})
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
});

router.get("/products3",(req,res)=>{
    saleModel.find({category:'accessories'})
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
});

router.get("/products4",(req,res)=>{
    saleModel.find({category:'perfume'})
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
                    res.redirect("/product/add");
                })
                .catch(err=>console.log(`Error while saving new product in database in last ${err}`));
            })
            .catch(err=>console.log(`Error while saving new product in database in second ${err}`));
        })
        .catch(err=>console.log(`Error while saving new product in database ${err}`));
    }
});


module.exports = router;