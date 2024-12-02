const mongoose = require("mongoose");

const ChatbotSchema = new mongoose.Schema({
  owner: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User"
  },
  name: { type: String, required: true },
  purpose: String,
  audience: String,
  knowledgeLevel: String,
  languageStyles: [String],
  personalityTraits: [String],
  keyFunctionalities: String,
  fallBackBehavior: String,
  privacyNeeds: String
});

const ChatBot = mongoose.model("Chatbot", ChatbotSchema);

module.exports = ChatBot;