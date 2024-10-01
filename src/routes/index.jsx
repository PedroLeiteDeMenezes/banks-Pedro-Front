import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/header'
import Login from '../pages/home/Login'
import Account from '../pages/account/account'
import CreateAccount from '../pages/home/createAccount'
import EditAccount from '../pages/account/editAccount'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/account/:userId' element={<Account />}/>
      <Route path='/createaccount' element={<CreateAccount/>}/>
      <Route path='/editaccount/:userId' element={<EditAccount/>}/>
    </Routes>
  )
}