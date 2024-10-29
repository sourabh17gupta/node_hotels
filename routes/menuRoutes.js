const express = require('express');
const router = express.Router();
const MenuItem = require('./../Models/menu');
router.post('/',async(req,res)=>{
    try{
    const data = req.body
    const newmenu = new MenuItem(data);
    const response = await newmenu.save();
    console.log('data saved');
    res.status(200).json(response);
    }catch(err){
       console.log(err);
       res.status(500).json({error:'internal servor eerror'});
    }
 })
 router.get('/',async(req,res)=>{
    try{
      const data =await MenuItem.find();
      console.log('fetch data successfully');
      res.status(200).json(data);
    }catch(err){
       console.log(err);
       res.status(500).json({error:'internal servor eerror'});
    }
 })
 router.get('/:taste',async(req,res)=>{
     try{
        const tastetype =req.params.taste;
        console.log(tastetype);
        if(tastetype=='sour'||tastetype=='sweet'||tastetype=='Spicy'){
            const response =await MenuItem.find({taste:tastetype});
            console.log('data fetched succesfully');
            res.status(200).json(response);
        }
        else{
            res.status(404).json('taste not exist')
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal servor error'});
    }
 })
 //comment added for testing purpose
 module.exports = router;