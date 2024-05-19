const express = require("express")

const router = express.Router()
const SkillModal = require("../models/Skills")

router.post('/add', async (req, res) => {
    const newSkill = req.body;
    if (!newSkill) return res.send(502).json("Please add skill")
    try {
        await SkillModal.insert(newSkill)
        return res.status(200).json({ message: "Success" });

    } catch (err) {
        return res.status(200).json({ err });

    }
    // SkillModal.push(newSkill);
    // res.status(201).json(newSkill);
});

module.exports = router;