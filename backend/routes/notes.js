const express = require("express");
const router =  express.Router();
const {getNotes, createNote, getNote, deleteNote, updateNote} = require("../controllers/notes.js")

router.route("/")
    .get(getNotes)
    .post(createNote)

router.route("/:id")
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote)

module.exports = router;