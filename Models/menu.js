const mongoose = require('mongoose');

const newitemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        enum:['Spicy','sour','sweet'],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingrediants:{
        type:[String],
        default:[],
    },
    num_sales:{
        type:Number,
        default:0,
    }
})

const MenuItem = mongoose.model('MenuItem',newitemSchema);
module.exports = MenuItem;