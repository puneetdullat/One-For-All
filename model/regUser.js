const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

 const regSchema = new Schema({

    name:
    {
        type:String,
        required:true
    },

    email:
    {
       type:String,
       unique:true
    },

    password:
    {
      type:String,
      required:true
    },

    dateCreated:
    {
        type:Date,
        default:Date.now()
    }
});

regSchema.pre("save",function(next)
{
  bcrypt.genSalt(10)
  .then((salt)=>{
    bcrypt.hash(this.password,salt)
    .then((encryptedPassword)=>{
      this.password = encryptedPassword;
      next();
    })
    .catch(err=>console.log(`Error when trying to hash the password ${err}`));
  })
  .catch(err=>console.log(`Error while creating salt for the password ${err}`));
})

const regModel = mongoose.model('Registrations', regSchema);
module.exports = regModel;