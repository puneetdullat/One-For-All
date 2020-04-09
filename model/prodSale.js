const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prodSchema = new Schema({

    title:
    {
        type:String,
        required:true
    },

    price:
    {
       type:String,
       required:true
    },

    description:
    {
      type:String,
      required:true
    },

    category:
    {
      type:String,
      required:true
    },

    quantity:
    {
      type:String,
      required:true
    },

    best:
    {
      type:String,
      required:true
    },

    photo:
    {
      type:String,
    },

    dateCreated:
    {
        type:Date,
        default:Date.now()
    }
});

const saleModel = mongoose.model('Products', prodSchema);
module.exports = saleModel;