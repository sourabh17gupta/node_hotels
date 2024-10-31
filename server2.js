const express = require('express')
const app = express();
const db=require('./db');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./Models/person');
require('dotenv').config();
app.use(bodyParser.json());//req body
const PORT = process.env.PORT || 3000;

const logRequest = (req, res, next) => {
   console.log(`${new Date().toLocaleString()} - Request made to: ${req.originalUrl}`);
   next(); // move to the next phase -----> if we do not call the next function then we can not find the data but request can happen
};

app.use(logRequest);

passport.use(new LocalStrategy(
   {
   //   usernameField: 'username',
   //   passwordField: 'password',
     passReqToCallback: true,  // Pass `req` to the callback so we can access both query and body
   },
   async (req, username, password, done)=>{
     try {
       // Check if username and password are provided in the query string
       username = req.query.username||null ;
       password = req.query.password ||null;
     console.log('Received credentials: ', username, password);
     const user = await Person.findOne({ username: username });
     if (!user) {
      console.log('user not found');
       return done(null, false, { message: 'Incorrect username.' });
     }
 
     const isPasswordMatch = user.password === password;
     if (isPasswordMatch) {
      console.log('password match');
       return done(null, user);
     } else {
      console.log('password not match');
       return done(null, false, { message: 'Incorrect password' });
     }
   } catch (err) {
     return done(err);
   }
 }));
 
 app.use(passport.initialize());
app.get('/',passport.authenticate('local',{session:false}),(req,res)=>{
   console.log('welcome to our hotel') 
   res.send('welcome to our hotel');
})

//Import the router file
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');
//use the router
app.use('/person',personRoutes);
app.use('/menus',menuRoutes);

app.listen(PORT,()=>
console.log('server is ON'))//this is just like room number to find somewon 
