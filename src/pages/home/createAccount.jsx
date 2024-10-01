import React, { useState } from 'react';
import axios from '../../services/axios';
import '../../styles/createAccount.css';
import { json, useNavigate } from 'react-router-dom';

export default function CreateAccount() {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');
  const [account_type, setAccounttype] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreate = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/user', {
        first_name,
        last_name,
        email,
        password,
        cpf,
        date_of_birth,
        account_type,
        address,
        phone,
      });
      console.log(response.data);

      const { user } = response.data;

      localStorage.setItem('user', JSON.stringify(user));

      console.log('Created User', JSON.stringify(user));

      navigate(`/login`);
    } catch (error) {
      setErrorMessage(error.response.data.errors[0] || 'An error occured');
    }
  };
  return (
    <div className="create-account-container">
      <form onSubmit={handleCreate}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required
            pattern=""
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>CPF: </label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date of Birthday: </label>
          <input
            type="Date"
            value={date_of_birth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Account Type: </label>
          <select
            value={account_type}
            onChange={(e) => setAccounttype(e.target.value)}
            required
          >
            <option value="">Select an account type</option>
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
            <option value="business">Business</option>
          </select>
        </div>
        <div>
          <label>Address: </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number: </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
