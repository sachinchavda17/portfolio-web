const mongoose = require("mongoose");

const Project = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  thumbnails: {
    type: Array,
    required: true,
  },
  text: {
    type: String,
    required: true,
    maxlength: 500,
  },
  view: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  usedLang: {
    type: Array,
  },
});

const ProjectModel = mongoose.model("Project", Project);

module.exports = ProjectModel;
