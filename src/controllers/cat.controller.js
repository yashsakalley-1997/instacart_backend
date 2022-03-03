const express = require("express");

const Option = require("../models/cat.model");
const router = express.Router();

router.post("", async(req, res) =>{
    try {
        const c = await Option.create(req.body);
        return res.status(201).send(c);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get("", async(req, res) =>{
    try {
        const c = await Option.find().lean().exec();
        return res.send(c);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get("/:id", async(req, res) =>{
    try {
        const c = await Option.findById(req.params.id).lean().exec();
        if(c){
            return res.send(c);
        }
        else{
            return res.status(404).send({message: "Not Found"});
        }
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.patch(":/id", async(req, res) =>{
    try {
        const c = await Option.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.status(201).send(c);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.delete("/:id", async(req, res) =>{
    try {
        const c = await Option.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(c);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;