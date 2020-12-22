const mongoose = require('mongoose');

const friendSchema = mongoose.Schema({
    name : {
        type : String ,
        required : true 
    },
    email : {
        type : String ,
        required : true ,
        
    },
    city : {
        type : String,
        required: true
    },
    age : {
        type : Number,
        required : true
    },
    date : {
        type : Date ,
        default : Date.now
    }
});

module.exports = mongoose.model('friend', friendSchema);
