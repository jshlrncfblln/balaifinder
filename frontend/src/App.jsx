import { useState } from 'react'
import './index.css'
import About from './pages/About'
import Home from './pages/Home'
import Properties from './pages/Properties'
import Matching from './pages/Matching'
import { Route, Routes } from 'react-router-dom'

import Maintenance from './pages/Maintenance'
import Login from './pages/Login'
import Register from './pages/Register'
import Tester from './pages/Tester'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Dashboard from './pages/Dashboard'


function App() {
  return (
    <div className='App'>
      <ToastContainer position='top-center'/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/matching" element={<Matching  />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Tester" element={<Tester />} />
        </Routes>
    </div>
  )
}

export default App
