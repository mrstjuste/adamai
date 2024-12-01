import { Link } from "react-router-dom";
import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    return (
        <div>
            <h1>Home page</h1>
        </div>
    );
};

export default Home;