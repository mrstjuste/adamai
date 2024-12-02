const mongoose = require("mongoose");

const KnowledgeLevelSchema = new mongoose.Schema({
    level : { type: String, unique: true, required: true }
});

const KnowledgeLevel = mongoose.model("KnowledgeLevel", KnowledgeLevelSchema);
module.exports = KnowledgeLevel;