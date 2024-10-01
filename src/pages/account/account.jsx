import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../styles/accountpage.css';

export default function Account() {
  const { userId } = useParams(); // Obtem o id do usuario da url
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

        const response = await axios.get(`/user/${userId}`); // Chama a rota que temos
        setUserData(response.data);
      } catch (error) {
        console.log(`Error fetching user data`, error);
        setErrorMessage('Error fetching user data');
      }
    };
    fetchUserData();
  }, [userId]);

  return (
    <div className='accountPage'>
      <div className='accountPage_header'>
        <h1 className='accountPage_title'>Account Page</h1>
        {userData && (
          <p className='accountPage_name'>
            {userData.first_name} {userData.last_name}
          </p>
        )}
      </div>

      <ul className='accountPage_edit'>
        <li>
          <Link to={`/editaccount/${userId}`}>Edit Account</Link>
        </li>
      </ul>

      {userData ? (
        <div className='accountPage_information'>
          <p>Email: {userData.email}</p>
          <div className='accountPage_balance'>
            <p>Balance</p>
            <p>$ {userData.balance.toFixed(2)}</p>
          </div>
        </div>
      ) : null}

      {errorMessage && <p className='accountPage_error'>{errorMessage}</p>}
    </div>
  );
}
