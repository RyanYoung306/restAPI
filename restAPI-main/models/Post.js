const mongoose = require('mongoose');
const { type } = require('os');


const PostSchema = mongoose.Schema({
    title:{
        type:String
        // required:true
    },
    firstName: {
        type: String
        // required: true
    },
    surname: {
        type: String
        // required: true
    },
    phone: {
        type: Number
        // required: true
    },
    email:{
        type: String
    },
    homeAddressLine1:String,
    homeAddressLine2:String,
    homeTown:String,
    homeCountyCity:String,
    homeEIRCODE:String,
    shipAddressLine1:String,
    shipAddressLine2:String,
    shipTown:String,
    shipCountyCity:String,
    shipEIRCODE:String,

    matchID:String
},{collection:'USERS'}  );

// mongoose.Schema({
//     username: String,
//     password: String,

// })

module.exports = mongoose.model('Posts', PostSchema);