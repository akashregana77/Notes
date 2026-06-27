const Note  = require("../models/Note");

async function getAllNotes(req,res){
    try{
        const allNotes = await Note.find()
        res.status(200).json(allNotes)
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"})
    }
}
async function getNoteById(req,res){
    try{
        const singleNote = await Note.findById(req.params.id);
        if(!singleNote)res.status(404).json({message:"note not found"});
        else{
            res.status(200).json(singleNote);
        }
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"})
    }
}
async function createNote(req,res){
    try{
        const {title,content} = req.body;
        const newNote = new Note({title,content});
        await newNote.save();
        res.status(201).json({message:"note created"})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"})
    }
}

async function updateNote(req,res){
    try{
        const {title,content}  = req.body;
        const deletedNote=await Note.findByIdAndUpdate(req.params.id,{title,content});
        if(!deletedNote)res.status(404).json({message:"note not found"})
        res.status(200).json({message:"updated success"})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"})
    }
}

async function deleteNote(req,res){
    try{
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"note deleted"})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"})
    }
    

}

module.exports={
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
}