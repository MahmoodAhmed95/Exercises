const express = require("express");
const router = express.Router();
const notesCtrl = require("../../controllers/api/notes");
const ensureLoggedIn = require("../../config/ensureLoggedIn");
// POST /notes
router.post("/", ensureLoggedIn, notesCtrl.create);
// GET /notes
router.get("/", ensureLoggedIn, notesCtrl.getAllForUser);

module.exports = router;
