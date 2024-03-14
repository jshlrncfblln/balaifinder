import './index.css'
import About from './pages/About'
import Home from './pages/Home'
import Properties from './pages/Properties'
import Matching from './pages/Matching'
import { Route, Routes } from 'react-router-dom'
import Maintenance from './pages/Maintenance'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'
import { Navigate } from 'react-router-dom'

function App() {
  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className='App'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/matching" element={<ProtectedRoute> <Maintenance /> </ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
        </Routes>
    </div>
  )
}

export default App
