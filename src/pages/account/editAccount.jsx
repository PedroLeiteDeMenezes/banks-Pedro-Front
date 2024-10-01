import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../services/axios'

export default function Edit(){
  const { userId } = useParams() // Obtem o id do usuario da url
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try{
        const response = await axios.get(`/user/${userId}`);
        const { first_name, last_name, email, password, address, phone} = response.data

        setFirstName(first_name)
        setLastName(last_name)
        setEmail(email) 
        setPassword(password)
        setAddress(address)
        setPhone(phone)
      }catch(error){
        setErrorMessage('Failed to fetch user data')
      } 
    }

    fetchUserData()
  }, [userId])

  const handleSave = async() => {
    try {
      await axios.put(`/user/${userId}`, {
        first_name,
        last_name,
        email,
        password,
        address,
        phone
      })
      setSuccessMessage('User information updated successfully')
      setErrorMessage('')
    }catch(error){
      setErrorMessage('Failed to updated information')
      setSuccessMessage('')
    }
  }

  return(
    <>
      <h1>Edit Information</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <div>
        <label>First Name: </label>
        <input 
        type="text" 
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name: </label>
        <input 
        type="text" 
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Email: </label>
        <input 
        type="text" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Address: </label>
        <input 
          type="text" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Phone: </label>
        <input 
          type="text" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save changes</button>
    </>
  )
}