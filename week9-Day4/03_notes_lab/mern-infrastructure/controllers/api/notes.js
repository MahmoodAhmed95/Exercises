const Note = require("../../models/note");

module.exports = {
  create,
  getAllForUser,
};

async function create(req, res) {
  try {
    // Add the note to the db
    const note = await Note.create(req.body);
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAllForUser(req, res) {
  const notes = await Note.find({ user: req.user._id }).sort("-updatedAt");
  console.log(`notes ==> ${JSON.stringify(notes, null, 2)}`);
  res.json(notes);
}
