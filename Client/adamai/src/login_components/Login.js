import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleLogin = (event, username, password) => {
        axios.get('http://localhost:9000/getUser', { params: { username, password}})
            .then((res) => {
                if (res.data) {
                    alert('Login Successful')
                    localStorage.setItem('loggedInUser', username);
                    setUsername('');
                    setPassword('');
                    
                    navigate('/')
                }
                else {
                    alert('Wrong Credentials')
                }
            })
            .catch((err) => alert('Error in Login'))
    }

    return (
        <div>
        <label className="label">Log in</label>
        <label>Username</label>
        <input
        id="uName"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

        <label>Password</label>
        <input
        id="pWord"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        
        <button class="btn btn-custom" type="button" onClick={(event) => {
                handleLogin(event, username, password)
            }}>Login</button>
        <br/>
        <p>No account?</p>
        <Link to="/Signup">Signup</Link>
    </div>
    );
};

export default Login;