const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser')
const Note = require('../modules/Notes');
const { body, validationResult } = require('express-validator');
// try {
router.get('/fetch', fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: id });
    res.json(notes);
  } catch (error) {
    res.status(400).send({ error: "servies problem part 3 dume 401" })
    console.log(error)
  }
});
// route 2 which use to add the notes
router.post('/addnotes', fetchuser, [
  body('title').not().isEmpty().withMessage('Title is required'),
  body('description').not().isEmpty().withMessage('description is required').isLength({ min: 5 }),

], async (req, res) => {

  try {
    const { title, description, tag } = req.body;
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(410).json({ error: error.array() });
    }
    const notes = new Note({ title, description, user: id, tag });
    const notessave = await notes.save()
    res.json(notes);
  } catch (error) {
    res.status(420).send({ error: "servies problem dume part 2 401" })
    console.log(error)
  }
});
router.put('/updatenote/:id', fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    // Create a newNote object
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") }

    if (note.user.toString() !== id) {
      console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
      return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: false })
    res.json({ note });
  } catch (error) {
    console.error(error.message);
  }
}
)
//route 4 delete notes
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    // Create a newNote object
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") }

    if (note.user.toString() !== id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id, { $set: newNote }, { new: false })
    res.json({ "success": "note deleted", node:node});

  } catch (error) {
    console.error(error.message);
  }
}
)



module.exports = router