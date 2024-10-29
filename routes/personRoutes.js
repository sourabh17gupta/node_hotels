const express = require('express');
const router = express.Router();
//imports the person file
const Person = require('./../Models/person');
//post route to add a person
router.post('/',async(req,res)=>{
    try{
      const data = req.body //assume that request body coointain th e person data
      
      //create a new person document using the mongoose model
      const newPerson =new Person(data);
      //save new person in database
      const response=await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    }catch(err){
       console.log(err);
       res.status(500).json({error:'internal servor eerror'});
    }
   })
   //get person data
router.get('/',async(req,res)=>{
    try{
      const persondata =await Person.find();
      console.log('fetch data successfully');
      res.status(200).json(persondata);
    }catch(err){
       console.log(err);
       res.status(500).json({error:'internal servor eerror'});
    }
 })

 router.get('/:workType',async (req,res)=>{
    try{
       const workType =req.params.workType;//extrsct worktype from url parameter 
       if(workType == 'chef'||workType=='manager'||workType=='waiter'){
          console.log('response fetched');
          const response = await Person.find({work: workType});
          res.status(200).json(response);
       }
       else{
           res.status(404).json({error: 'invalid work type'});
       }
    }catch(err){
       console.log(err);
       res.status(500).json({error:'internal servor eerror'});
    }
 })
 //update the data
 router.put('/:id',async(req,res)=>{
   try{
      const personId = req.params.id;//extract id from url paramater
      const updatedPersonData = req.body;// Update data from person
      const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
         new : true,//return the update document
         runValidators : true //run mongoose validation
      })
      if(!response){
         return res.status(404).json({error: 'person not found'});
      }
      console.log('data updated');
      res.status(200).send(response);
   }catch(err){
      console.log(err);
       res.status(500).json({error:'internal servor eerror'});
   }
 })
 //delete operation
 router.delete('/:id',async(req,res)=>{
   try{
      const personId = req.params.id;//extract the person id from url parameter

      //assume you have aperson model
      const response = await Person.findByIdAndDelete(personId);
      if(!response){
         return res.status(404).json({error: 'person not found'});
      }
      console.log('data delete');
      res.status(200).json({message: 'person deleted succesfully'});

   }catch(err){
      console.log(err);
      res.status(500).json({error:'internal servor eerror'});
   }
 })
 module.exports = router;