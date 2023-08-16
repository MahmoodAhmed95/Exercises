// routes/skills.js
const express = require("express"); //
const router = express.Router(); //
const skillsController = require("../controllers/controllersskills");

// GET /skills
router.get("/", skillsController.index);
router.get("/new", skillsController.new);
// GET /skills/:id
router.post("/create", skillsController.create);
router.get("/delete/:id", skillsController.deleteOne);
router.get("/edit/:id", skillsController.edit);
router.put("/update/:id", skillsController.update);
router.get("/:id", skillsController.show);
module.exports = router;
