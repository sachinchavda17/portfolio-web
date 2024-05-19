const mongoose = require( "mongoose");


const SkillSchema = new mongoose.Schema({
    title: String,
    skill: [{
        name: String,
        img: String,
    },]
});

const Skill = mongoose.model("Skill", SkillSchema);

module.exports =  Skill;
