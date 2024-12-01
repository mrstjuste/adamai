import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const CreateChatbot = () => {
    // variables set on load
    const [personalities, setPersonalities] = useState([]);
    const [languageStyles, setLanguageStyles] = useState([]);
    const [knowledgeLevels, setKnowledgeLevels] = useState([]);
    // variables to be inputted
    const [botName, setBotName] = useState('');
    const [purpose, setPurpose] = useState('');
    const [audience, setAudience] = useState('');
    const [selectedPersonalities, setSelectedPersonalities] = useState([]);
    const [knowledge, setKnowledge] = useState('');
    const [selectedLanguageStyles, setSelectedLanguageStyles] = useState([]);
    const [keyFunctionalities, setKeyFunctionalities] = useState('');
    const [customResponse, setCustomResponse] = useState('');
    const [fallbackBehavior, setFallBackBehavior] = useState('');
    const [privacyNeeds, setPrivacyNeeds] = useState('');

    const loggedInUser = localStorage.getItem('loggedInUser');
    const hasPurchased = localStorage.getItem('hasPurchased');

    const handleCreateChatBot = async(event) => {}

    return (
        <div>
        <label className="label">Create a chatbot</label>
        <form onSubmit={handleCreateChatBot}>
            <textarea
                placeholder="Enter the name of this chatbot"
                value={botName}
                onChange={(e) => setBotName(e.target.value)}
                required
            />
            <textarea
                placeholder="Enter the purpose of this chatbot"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
            />
            <textarea
                placeholder="Whose the target audience?"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                required
            />
            <label>Select the chatbot's personality traits</label>
                {/* Personalities variable mapped here
                 <Select
                    isMulti
                    value={selectedUsers}
                    onChange={setSelectedUsers}
                    options={userOptions}
                    required
                /> */}
                <select onChange={(e) => setKnowledge(e.target.value)} value={knowledge} required>
                <option value="">Select Preferred Knowledge of topic</option>
                {/* knowledgeLevels variable mapped here
                {users.map((user, index) => (
                    <option key={index} value={user._id}>
                        {user.firstName} {user.lastName}
                    </option>
                ))} */}
                </select>
            
            <select onChange={(e) => setSelectedLanguageStyles(e.target.value)} value={selectedLanguageStyles} required>
                <option value="">Select Preferred Language Style</option>
                {/* <Select
                    isMulti
                    value={selectedUsers}
                    onChange={setSelectedUsers}
                    options={userOptions}
                /> */}
            </select>
            <textarea
                placeholder="Write down the chatbot's key functionalities."
                value={keyFunctionalities}
                onChange={(e) => setKeyFunctionalities(e.target.value)}
                required
            />
            <textarea
                placeholder="Custom responses"
                value={customResponse}
                onChange={(e) => setCustomResponse(e.target.value)}
                required
            />
            <textarea
                placeholder="Fallback behavior"
                value={fallbackBehavior}
                onChange={(e) => setFallBackBehavior(e.target.value)}
                required
            />
            <textarea
                placeholder="Privacy & Security needs"
                value={privacyNeeds}
                onChange={(e) => setPrivacyNeeds(e.target.value)}
                required
            />
            <button type="submit">Create</button>
        </form>
    </div>
    );
};

export default CreateChatbot;