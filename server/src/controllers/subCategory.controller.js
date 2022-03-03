const express = require("express");
const SubCategory = require("../models/sub_category.model");
const router = express.Router();


router.post("",async (req,res)=>{
    try{
        const subCategory = await SubCategory.create(req.body);    
        return res.status(201).send(subCategory);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})


router.get("/:id", async (req,res)=>{
    try{
        const subCategories = await SubCategory.find({category:req.params.id}).lean().exec();
        return res.status(200).send(subCategories);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})


module.exports = router;
