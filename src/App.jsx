import React from 'react'

import Auth from './pages/Auth/Auth'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'

import Navbar from './components/Navbar.jsx'


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home/HomePage'

const App = () => {
  return (
    <main className=''>
      <Router>
        <Navbar />
        <Auth />
        <HomePage />
      </Router>
    </main>
  )
}

export default App
