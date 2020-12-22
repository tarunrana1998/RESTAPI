const express = require('express');
const router = express.Router();
const friend = require('../modules/friend')

// GET BACK ALL THE FRIENDS DETAILS
router.get('/', async (req,res) =>{
    try {
        const friends = await friend.find();
        res.json(friends);
    } catch (err){
        res.json({message : err});
    }
});

// SAVE A FRIEND  DETAILS IN DATABASE
router.post('/', async (req,res) =>{
    const Friend = new friend({
        name : req.body.name,
        email : req.body.email,
        city : req.body.city,
        age : req.body.age
    });
    try {
        const SavedFriend = await Friend.save();
        res.json(SavedFriend);
    } catch(err) {
        res.json({ message :err});
    }       
});

// SEARCH A SPECIFIC POST
router.get('/:postID', async (req,res) => {
    try {
        const singlefriend = await friend.findById(req.params.postID);
        res.json(singlefriend);
    } catch(err) {
        res.json({message : err});
    }
    
});

// DELETE THE FRIEND
router.delete('/:postID', async (req,res) => {
    try {
        const deletefriend = await friend.findByIdAndDelete( req.params.postID);
        res.json(deletefriend);
    } catch(err) {
        res.json({message : err});
    }
    
});

module.exports = router ;