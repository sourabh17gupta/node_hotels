const express = require('express')
const app = express();
const db=require('./db');
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
app.get('/idli',function(req,res){
   console.log('welcome to our hotel') 
})

//Import the router file
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');
//use the router
app.use('/person',personRoutes);
app.use('/menus',menuRoutes);

app.listen(PORT,()=>
console.log('server is ON'))//this is just like room number to find somewon 