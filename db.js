const mongoose = require('mongoose');
require('dotenv').config();
//define mongoDB connection URL
// const mongoURL=process.env.MONGODB_URL_LOCAL;
const mongoURL= process.env.MONGODB_URL;
//set up mongo db connection
mongoose.connect(mongoURL,{
    // useNewUrlParser: true, //since new version comes no need to write this
    // useUnifiedTopology: true
});

//get the default connection
//moongose maintain a default connection object repersenting the mongodb connection
const db=mongoose.connection;

//define event listener for database connection
db.on('connected',()=>{
    console.log('connected to mongodb server');
});
db.on('error',(err)=>{
    console.error('mongodb connection error:', err);
});
db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});

//exports the database connection
module.exports = db;