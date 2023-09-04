const mongoose = require('mongoose');
const { type } = require('os');


const PostSchema = mongoose.Schema({
    model: {
        type: String
        // required: true
    },
    price: {
        type: String
        // required: true
    },
    firstName:String,
    surname:String,
    matchID:{
        type: String
    },
   
},{collection:'ORDERS'}  );

// mongoose.Schema({
//     username: String,
//     password: String,

// })

module.exports = mongoose.model('Orders', PostSchema);