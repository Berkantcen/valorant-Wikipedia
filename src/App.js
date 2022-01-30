import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// COMPONENTS
import Header from './components/Header/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import Weapons from './pages/Weapons.jsx'
import Agents from './pages/Agents.jsx'
import Maps from './pages/Maps.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/weapons' element={<Weapons />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/maps' element={<Maps />} />
      </Routes>
    </Router>
  )
}

export default App
