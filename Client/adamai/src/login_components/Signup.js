import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const handleSignUp = async (event, firstName, lastName, username, password) => {
        event.preventDefault();
        try {
          await axios.post('http://localhost:9000/createUser', { firstName, lastName, username, password });
          alert("Registration Succesful. Welcome " + firstName + ", please log in!");
          navigate('/Login');
      } catch (err) {
          console.error(err);
          alert(`Error in Signing Up: ${err.response ? err.response.data : err.message}`);
      }
    }

    return (
        <div className="container">
        <label className="label">Sign up</label>
          <label>First Name</label>
          <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
          <br/>
          <label>Last Name</label>
          <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
          <br/>
          <label>Username</label>
          <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
          <br/>
          <label>Password</label>
          <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          <br/>
          <button class="btn btn-custom" type="button" onClick={(event) => handleSignUp(event, firstName, lastName, username, password)}>
        Signup
      </button>
          <br/>
          <p>Return to login</p>
          <Link to="/Login">Login</Link>
      </div>
    );
};

export default SignUp;