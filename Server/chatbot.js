// Install dependencies
// npm install @langchain/openai dotenv openai
// npm install body-parser
// npm install express

const { ChatOpenAI } = require('@langchain/openai');
const dotenv = require('dotenv');

dotenv.config();

const defaultLayout = {
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
        "Offering support and advice",
    ],
    customResponses: {
        greeting: "Hello! How can I assist you today?",
        farewell: "Goodbye! Have a great day!",
        fallback: "I'm sorry, I didn't quite understand that. Could you please rephrase?",
    },
    fallbackBehavior: "Provide a polite and helpful response asking for clarification.",
    privacyNeeds: "Ensure user data is not stored or shared without consent.",
};

function updateConfigWithJson(jsonInput) {
    try {
        const cleanedConfig = processData(jsonInput)
        const newConfig = JSON.parse(cleanedConfig);
        config = newConfig
        console.log("Configuration updated successfully:", config);
    } catch (error) {
        console.error("Error parsing the JSON input:", error.message);
    }
}

const cleanInput = (data) => {
    return JSON.stringify(data.map(item => {
      const { _id, owner, __v, ...rest } = item;
      return rest;
    }), null, 2);
  };

  const processData = (data) => {
    return data.map(item => {
      item.languageStyles = typeof item.languageStyles === 'string' 
        ? item.languageStyles.split(',').map(style => style.trim()) 
        : item.languageStyles;
  
      item.personalityTraits = typeof item.personalityTraits === 'string' 
        ? item.personalityTraits.split(',').map(trait => trait.trim()) 
        : item.personalityTraits;
  
      return item;
    });
  };
let config = defaultLayout;

const chatBot = new ChatOpenAI({
    model: "gpt-4",
    temperature: 0,
    openAIApiKey: process.env.OPENAI_API_KEY,
});

async function handleUserInput(userInput) {
    if(process.env.MOCK_MODE === "true"){
        return {content: "Placeholder response."}
    }
    else{
        try {
            const messages = [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: userInput },
            ];
            const response = await chatBot.invoke(messages);
            console.log("Response:", response);
            return response;
        } catch (error) {
            console.error("Error generating response:", error.message);
            throw new Error("Failed to generate a response");
        }
    }
}

module.exports = { handleUserInput, updateConfigWithJson };
