import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Register from './Register'
import Login from './Login'

const Auth = () => {
    return (
        <section className='max-container'>
            <Routes>
                <Route path='/login' element={<Login />}/>     
                <Route path='/register' element={<Register />}/>
            </Routes>              
        </section>
    )
}

export default Auth
