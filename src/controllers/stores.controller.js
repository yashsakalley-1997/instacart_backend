const express = require("express");

const Store = require("../models/stores.model");
const router = express.Router();

router.post("", async(req, res) =>{
    try {
        const s = await Store.create(req.body);
        return res.status(201).send(s);  
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get("", async(req, res) =>{
    try {
        const s = await Store.find()
        .populate({
            path:"categories_id",
        })
        .lean().exec();
        return res.send(s);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get("/:id", async(req, res) =>{
    try {
        
        const s = await Store.find({categories_id: req.params.id})
        .populate({
            path:"categories_id",
        })
        .lean().exec();
        if(s){
            return res.send(s);
        }
        else{
            return res.status(404).send({ message: "Store not found" });
        }
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.patch("/:id", async(req, res) =>{
    try {
        const s = await Store.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.status(201).send(s);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.delete("/:id", async(req, res) =>{
    try {
        const s = await Store.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(s);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;