// controllers/skills.js
const skillModel = require("../models/modelsskill");

module.exports = {
  index: function (req, res) {
    const skills = skillModel.getAll();
    res.render("viewsskills/index", { skills });
  },
  show: function (req, res) {
    const id = req.params.id;
    const skill = skillModel.getOne(id);

    if (skill) {
      res.render("viewsskills/show", {
        title: "Show Skill Details",
        skill,
        id,
      });
    } else {
      res.status(404).send("show Skill page not found.");
    }
  },
  new: newOne,
  create,
  deleteOne,
  edit,
  update,
};

function newOne(req, res) {
  res.render("viewsskills/newViews", {
    title: "Add New Skill",
  });
}

function create(req, res) {
  console.log(req.body);
  skillModel.createSkill(req.body);
  res.redirect("/routesskills");
}

function deleteOne(req, res) {
  skillModel.deleteSkill(req.params.id);
  res.redirect("/routesskills");
}

function edit(req, res) {
  const id = req.params.id;
  const skill = skillModel.getOne(id);
  if (skill) {
    res.render("viewsskills/edit", { title: "Edit Skill", skill, id });
  } else {
    res.status(404).send("editiiiiiiiii Skill not found.");
  }
}

function update(req, res) {
  const id = req.params.id;
  skillModel.updateSkill(id, req.body);
  res.redirect("/routesskills/" + id);
}
