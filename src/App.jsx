import React from 'react'

import Auth from './pages/Auth/Auth'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'

import Navbar from './components/Navbar.jsx'


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <main className=''>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />}/>  
          <Route path='/register' element={<Register />}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
