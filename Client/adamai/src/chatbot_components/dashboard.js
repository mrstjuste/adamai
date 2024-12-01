import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const loggedInUser = localStorage.getItem('loggedInUser');
    const hasPurchased = localStorage.getItem('hasPurchased');
    return (
        <div className="container">
            <h1>Projects</h1>
            {/** Create a dashboard similar to this sing the projects component. Make sure that all projects displayed are ASSOCIATED with the user:
             * https://cdn.discordapp.com/attachments/1280621594942640211/1306040579242725427/Screenshot_2024-11-12_at_6.28.03_PM.png?ex=674d9c53&is=674c4ad3&hm=94b339de6fd97d67cc5b094a128d4777d2642db8840ad4ebea029dc84d8a9e68&
             */}
        </div>
    );
};

export default Dashboard;