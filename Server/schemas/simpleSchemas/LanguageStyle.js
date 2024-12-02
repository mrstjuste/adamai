const mongoose = require("mongoose");

const LanguageStyleSchema = new mongoose.Schema({
    style : { type: String, unique: true, required: true }
});

const LanguageStyle = mongoose.model("LanguageStyle", LanguageStyleSchema);
module.exports = LanguageStyle;