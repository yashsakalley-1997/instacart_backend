const express = require("express");
const Category = require("../models/category.model");
const router = express.Router();


router.post("",async (req,res)=>{
    try{
        const category = await Category.create(req.body);    
        return res.status(201).send(category);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("",async (req,res)=>{
    try{
        const categories = await Category.find().lean().exec();
        return res.status(200).send(categories)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})



router.patch("/:id", async (req,res)=>{
    try{
        const category = await Category.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        }).lean().exec();
        return res.status(200).send(category);
    }   
    catch(err){
        return res.status(500).send(err.message);
    }
})
module.exports = router;