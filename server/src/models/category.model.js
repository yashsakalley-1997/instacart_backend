const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    bg_img:{type:String,required:true},
    img:{type:String,required:true}
},{
    versionKey:false
})

module.exports = mongoose.model("category",categorySchema)

