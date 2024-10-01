import React, { useState } from 'react';
import axios from '../../services/axios';
import '../../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Create() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/tokens/', {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('token', token);

      console.log('Logged User', user);

      navigate(`/account/${user.id}`);
    } catch (error) {
      setErrorMessage(error.response.data.errors[0] || 'An error occured');
    }
  };
  return (
    <>
      <header className="header">
        <h1>Banks Pedro</h1>
        <ul className="Menu">
          <li>
            <Link to="/createaccount">Create Account</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </header>
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <div>
            <label>Email: </label>
            <input
              className="input1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login_form">
            <label>Password:</label>
            <input
              className="input2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
