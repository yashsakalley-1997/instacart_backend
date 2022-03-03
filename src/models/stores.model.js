const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    poster: {type: String, require: true}, 
    delivery: {type: String, required: true, default: "Delivery by 3:00 pm"},
    categories_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "option",
        required: true,
    },
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("store", userSchema);