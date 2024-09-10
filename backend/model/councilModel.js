const mongoose = require('mongoose');

const councilSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    
})

const Council = mongoose.model('Council', councilSchema);
module.exports = Council;