const { OpenAI } = require('langchain/chat_models');

// Function to update config with JSON input
function updateConfigWithJson(jsonInput) {
    try {
        const newConfig = JSON.parse(jsonInput);
        config = { ...config, ...newConfig };
        console.log("Configuration updated successfully:", config);
    } catch (error) {
        console.error("Error parsing the JSON input:", error);
    }
}

// Configuration for the LangChain model
let config = {
    name: "ChatBot",
    purpose: "To assist users with information, support, and engaging conversations.",
    audience: "General audience, including students, professionals, and casual users.",
    personalityTraits: ["friendly", "helpful", "knowledgeable", "empathetic"],
    knowledgeLevel: "Expert",
    languageStyle: "Conversational, approachable, and clear.",
    keyFunctions: [
        "Answering questions",
        "Providing information",
        "Engaging in small talk",
        "Offering support and advice"
    ],
    customResponses: {
        greeting: "Hello! How can I assist you today?",
        farewell: "Goodbye! Have a great day!",
        fallback: "I'm sorry, I didn't quite understand that. Could you please rephrase?"
    },
    fallbackBehavior: "Provide a polite and helpful response asking for clarification.",
    privacyNeeds: "Ensure user data is not stored or shared without consent."
};

// Initialize the LangChain model with the configuration
const chatBot = new OpenAI(config);

// Example function to handle user input and generate a response
async function handleUserInput(userInput) {
    try {
        const response = await chatBot.generateResponse(userInput);
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error generating response:", error);
    }
}

module.exports = { handleUserInput, updateConfigWithJson };