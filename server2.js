const express = require('express')
const app = express();
const db=require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/idli',function(req,res){
   console.log('welcome to our hotel') 
})

//Import the router file
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');
//use the router
app.use('/person',personR0outes);
app.use('/menus',menuRoutes);
app.listen(3200,()=>
console.log('server is ON'))//this is just like room number to find somewon 