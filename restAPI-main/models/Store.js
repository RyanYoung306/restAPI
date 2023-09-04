const mongoose = require('mongoose');
const { type } = require('os');


const PostSchema = mongoose.Schema({
    manufacturer:{
        type:String
        // required:true
    },
    model: {
        type: String
        // required: true
    },
    price: {
        type: String
        // required: true
    },
    matchID:{
        type: String
    },
   
},{collection:'STORE'}  );

// mongoose.Schema({
//     username: String,
//     password: String,

// })

module.exports = mongoose.model('Store', PostSchema);