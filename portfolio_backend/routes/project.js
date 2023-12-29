const express = require("express");
const router = express.Router();
const ProjectModel = require("../models/ProjectModel");

router.post("/create", async (req, res) => {
  const { title, thumbnail, text, view, source } = req.body;
  if (!title || !thumbnail || !text || !view || !source) {
    return res
      .status(301)
      .json({ err: "Insufficient details to create Project. " });
  }

  const projectDetails = { title, thumbnail, text, view, source };
  // const createProject = await ProjectModel.create(projectDetails)
  try {
    await ProjectModel.insertMany(projectDetails);
    return res.status(200).json({ message: "Success" });
  } catch {
    (err) => {
      return res.status(200).json({ err });
    };
  }
});

router.get("/get/allproject", async (req, res) => {
  const proj = await ProjectModel.find({});
  return res.status(200).json({ data: proj });
});

router.get("/get/singleproject/:projectId", async (req, res) => {
  const { projectId } = req.params;
  const proj = await ProjectModel.find({ _id: projectId });
  return res.status(200).json({ data: proj });
});

router.post("/update/:projectId", async (req, res) => {
  const { projectId } = req.params;
  const { title, thumbnail, text, view, source } = req.body;
  const projectDetails = { title, thumbnail, text, view, source };
  try {
    await ProjectModel.updateOne({ _id: projectId }, projectDetails);
    return res.status(200).json({ message: "Successfully Updated." });
  } catch {
    (err) => {
      return res.status(200).json({ err });
    };
  }
});

router.get("/delete/:projectId", async (req, res) => {
  const { projectId } = req.params;
  await ProjectModel.deleteOne({ _id: projectId });
  return res.status(200).json({ message:"Successfully deleted." });
});

module.exports = router;
