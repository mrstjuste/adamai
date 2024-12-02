import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const User = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const hasPurchased = localStorage.getItem('hasPurchased');
    return (
        <div className="container">
            <h1>My Account.</h1>
            {/** Make a dedicated page to show all the user data */}
        </div>
    );
};

export default User;