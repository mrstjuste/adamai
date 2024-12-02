const mongoose = require("mongoose");

const PersonalityTraitSchema = new mongoose.Schema({
    trait : { type: String, unique: true, required: true }
});

const PersonalityTrait = mongoose.model("PersonalityTrait", PersonalityTraitSchema);
module.exports = PersonalityTrait;