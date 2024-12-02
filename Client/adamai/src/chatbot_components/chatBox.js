import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Chatbox = () => {
    const [chatLog, setChatLog] = useState([]);
    const { projId } = useParams();
    const loggedInUser = localStorage.getItem('loggedInUser');
    const hasPurchased = localStorage.getItem('hasPurchased');
    {/** Make a chatbox which looks similar to this:
        https://cdn.discordapp.com/attachments/1280621594942640211/1306040578839941240/Screenshot_2024-11-12_at_6.33.25_PM.png?ex=674d9c53&is=674c4ad3&hm=4fb46023a6e2b5a7f0d38837850a477273e04783125eaad9e5a1c1436f7fff0c&
        */}
    const sendMessage = (event, loggedInUser, projid) => {}
    const waitForMessage = (event, loggedInUser, projId) => {}
    return (
        <div className="container">
            <h1>Chatbox.</h1>
        </div>
    );
};

export default Chatbox;