const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
    name: {type:String, required: true}
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("option", optionSchema);