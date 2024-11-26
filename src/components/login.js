// src/components/login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Here we just check if username and password are correct
    if (username === 'user' && password === 'password') {
      localStorage.setItem('user', username);
      navigate('/'); // Navigate to the homepage
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
