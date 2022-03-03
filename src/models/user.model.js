const mongoose = require("mongoose") ;
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {   
        email:{type:String,unique:true} ,
        password:{type:String},
    },
    {
        versionKey:false,
        timestamps:true,
    }
);


//Step:2 For Password
userSchema.pre("save" , function(next){
    if(!this.isModified("password"))return next() ;

    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash ;
    return next() ;
});

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password,this.password) ;
};


const User = mongoose.model("user",userSchema) ;
module.exports = User ;