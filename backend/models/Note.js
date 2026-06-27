const mongoose = require("mongoose");

//create scheme

const noteScheme = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const Note = mongoose.model("Note",noteScheme)

module.exports=Note;