import { useState } from 'react'
import './index.css'
import About from './pages/About'
import Home from './pages/Home'
import Properties from './pages/Properties'
import Matching from './pages/Matching'
import { Route, Routes } from 'react-router-dom'
import Maintenance from './pages/Maintenance'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Register from './pages/Register'

function App() {
  return (
    <div className='App'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Maintenance />} />
            <Route path="/properties" element={<Maintenance />} />
            <Route path="/matching" element={<Maintenance />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  )
}

export default App