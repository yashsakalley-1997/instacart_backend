const express = require("express");
const Product = require("../models/product.model");
const Store = require("../models/stores.model")
const { route } = require("./subCategory.controller");
const router = express.Router();

router.post("",async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        return res.status(201).send(product);
    }   
    catch(err){
        return res.status(500).send(err.message);
    }
})


// get all products.
router.get("",async (req,res)=>{
    try{
        const products = await Product.find().lean().exec();
        return res.status(201).send(products);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

// get products for a particular category.
router.get("/:id",async (req,res)=>{
    try{
        let products;
        if(req.query == {}){
            products = await Product.find({category:req.params.id})
            .populate({path:"store",model:Store,select:["name","poster"]}).lean().exec();
        }
        else{
            req.query['category'] = req.params.id
            products = await Product.find(req.query).
            populate({path:"store",model:Store,select:["name","poster"]}).lean().exec();
        }
        return res.status(200).send(products);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

module.exports = router;

