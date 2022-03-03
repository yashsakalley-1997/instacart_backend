const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    weight:{type:String,required:true},
    img:{type:String,required:true},
    category:{type:mongoose.Schema.Types.ObjectId,ref:"category",required:true},
    sub_category:{type:mongoose.Schema.Types.ObjectId,ref:"sub_category",required:true},
    store:{type:mongoose.Schema.Types.ObjectId,ref:"store",required:true}  
})

module.exports = new mongoose.model("product",productSchema)