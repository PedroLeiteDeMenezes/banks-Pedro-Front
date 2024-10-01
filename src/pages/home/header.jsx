import React from 'react';
import Content from './content';
import '../../styles/GlobalStyles.css'; // Ajuste o nome e o caminho conforme necessário
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <header className='header'>
                <h1>Banks Pedro</h1>
                <ul className='Menu'>
                    <li><Link to="/createaccount">Create Account</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </header>
            <Content />
        </>
    );
}
