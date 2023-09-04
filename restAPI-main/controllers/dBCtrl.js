const Post = require('../models/Post');

const dBCtrl = {};

const mongoose = require('mongoose');

//connect to db 
mongoose.connect(
    process.env.DB_CONNECTION, //use safe .env password file
    {useNewUrlParser: true},
    console.log("connected to users")
);

dBCtrl.user = async (req, res) => {
    //gets all posts
    try{
        const posts = await Post.find()
        res.json(posts);
    }catch(err){
        res.json({message: err},"user does not exist");
    }
};

// //adds post
dBCtrl.createUser = async (req,res) => {
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        firstName: req.body.firstName,
        surname: req.body.surname,
        phone: req.body.phone,
        email: req.body.email,
        homeAddressLine1: req.body.homeAddressLine1,
        homeAddressLine2: req.body.homeAddressLine2,
        homeTown: req.body.homeTown,
        homeCountyCity: req.body.homeCountyCity,
        homeEIRCODE:req.body.homeEIRCODE,

        shipAddressLine1: req.body.shipAddressLine1,
        shipAddressLine2: req.body.shipAddressLine2,
        shipTown: req.body.shipTown,
        shipCountyCity: req.body.shipCountyCity,
        shipEIRCODE:req.body.shipEIRCODE,

        matchID: req.body.matchID

    });
    try{
    const saved = await post.save()
    res.json(saved)
    }catch(err){
        res.json({message: err});
    }
}

// //deletes post by first name
dBCtrl.deleteUser =  async (req , res) => {  
    // console.log(req.params.firstName); // returns the specified route after /posts/x
    try{
        const deleteP = await Post.deleteOne({firstName: req.params.firstName});
        res.json(deleteP);
    }catch(err){
        res.json({message:err});
    }
};


// //update post by ID
dBCtrl.updateUser = async (req , res) => {  
    // console.log(req.params.postID); // returns the specified route after /posts/x
    try{
        const updateP = await Post.updateOne(
            {firstName: req.params.firstName}, 
            { $set : {
                title: req.body.title,
                // firstName: req.body.firstName,
                surname: req.body.surname,
                // phone: req.body.phone,
                email: req.body.email
                // homeAddress: req.body.homeAddress,
                // shippingAddress: req.body.shippingAddress
            }
        });
        res.json(updateP);
    }catch(err){
        res.json({message:err});
    }
};

module.exports = dBCtrl;