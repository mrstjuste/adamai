import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Subscribe = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const hasPurchased = localStorage.getItem('hasPurchased');
    {/** Please write a subscription page which looks/works 
        very similar to this:

        Link: https://cdn.discordapp.com/attachments/1280621594942640211/1306040576805830807/Screenshot_2024-11-12_at_6.37.46_PM.png?ex=674d9c52&is=674c4ad2&hm=4216cef42345187d17aa114069fbe662e0369263b31a9b4a63e14f3ea0d54b6d&
        */}

    const handleSubscribe = (event, loggedInUser) =>{

    }
    return (
        
        <div className="container">
            <h1>Subscribe</h1>
        </div>
    );
};

export default Subscribe;