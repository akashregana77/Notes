const express = require("express");
const {getAllNotes,deleteNote,updateNote,createNote,getNoteById} =require( "../controllers/notesController.js")
const router = express.Router();

 
router.get("/",getAllNotes)

router.get("/:id",getNoteById)

router.post("/",createNote)

router.put("/:id",updateNote)

router.delete("/:id",deleteNote)

module.exports = router;