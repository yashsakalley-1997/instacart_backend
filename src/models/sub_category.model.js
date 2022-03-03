const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:mongoose.Schema.Types.ObjectId,ref:"category",required:true}
},{
    versionKey:false
})

module.exports = mongoose.model("sub_category",subcategorySchema);
