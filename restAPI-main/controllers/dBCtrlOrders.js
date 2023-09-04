const Post = require('../models/Orders');

const dBCtrlOrders = {};

const mongoose = require('mongoose');

//connect to db 
mongoose.connect(
    process.env.DB_CONNECTION, //use safe .env password file
    {useNewUrlParser: true},
    console.log("connected to orders")
);

dBCtrlOrders.user = async (req, res) => {
    //gets all posts
    try{
        const posts = await Post.find()
        res.json(posts);
    }catch(err){
        res.json({message: err},"user does not exist");
    }
};

// //adds post
dBCtrlOrders.createUser = async (req,res) => {
    // console.log(req.body);
    const post = new Post({
        model: req.body.model,
        price: req.body.price,
        firstName:req.body.firstName,
        surname:req.body.surname,
        matchID: req.body.matchID
    });
    try{
    const saved = await post.save()
    res.json(saved)
    }catch(err){
        res.json({message: err});
    }
}

// //deletes post by matchID
dBCtrlOrders.deleteUser =  async (req , res) => {  
    // console.log(req.params.firstName); // returns the specified route after /posts/x
    try{
        const deleteP = await Post.deleteOne({matchID: req.params.matchID});
        res.json(deleteP);
    }catch(err){
        res.json({message:err});
    }
};


// //update post by matchID
dBCtrlOrders.updateUser = async (req , res) => {  
    // console.log(req.params.postID); // returns the specified route after /posts/x
    try{
        const updateP = await Post.updateOne(
            {matchID: req.params.matchID}, 
            { $set : {
                model: req.body.model,
                price: req.body.price,
                matchID: req.body.matchID
            }
        });
        res.json(updateP);
    }catch(err){
        res.json({message:err});
    }
};

module.exports = dBCtrlOrders;