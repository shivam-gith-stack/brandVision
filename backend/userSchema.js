const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = new mongoose.Schema({
    name : {
        type : String ,
        required : true,
        minlength : 3
    },
    email : {
        type  : String ,
        required : true,
        unique : true 
    },
    phone : {
        type : String ,
        required : true ,
        minlength : 10
    },
    company : {
        type : String,
        required : false,
    },
    service : {
       type : String,
       required : true
    },
    message : {
        type : String,
        required : false
    },
    createdat : {
        type : Date ,
        default : Date.now()
    }

})

User.methods.generatetoken =  function () {

    return  jwt.sign({id : this._id} , "shivam" , {expiresIn : 2})
    
    
}
module.exports = mongoose.model("ClientDetails" , User)
