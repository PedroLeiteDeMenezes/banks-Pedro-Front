import React from 'react';
import Home from './pages/home/header';
import Create from './pages/home/Login';


import './styles/GlobalStyles.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';


function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
