const express = require("express");
const router = express.Router();

const { createNote, bulkCreateNotes, getAllNotes, getNoteById } = require("../controllers/note.controller");

router.post("/", createNote);
router.get("/", getAllNotes);
router.post("/bulk", bulkCreateNotes);
router.get("/:id", getNoteById);

module.exports = router;