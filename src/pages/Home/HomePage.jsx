import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Products from '../Products/Products'
import Carts from '../Carts/Carts.jsx'

const HomePage = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/products' element={<Products />}/>
                <Route path='/carts' element={<Carts />}/>
            </Routes>
        </main>
    )
}

export default HomePage
