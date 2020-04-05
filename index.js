const express = require("express");
const app = express();
const exphbs= require("express-handlebars");
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

app.use(fileUpload());

const bodyParser = require('body-parser');

require('dotenv').config({path:"./configure/keys.env"})

app.engine("handlebars",exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }))

const generalController = require("./controllers/general");
const productController = require("./controllers/product");

app.use("/",generalController);
app.use("/product",productController);


mongoose.connect(process.env.MONGODB_KEY, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('MongoDB is Up!');
})
.catch(err=>console.log(`THERE IS AN ERROR IN MONGODB: ${err}`));

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Website is Up and Running`);
});