import React from 'react'
import { Link } from 'react-router-dom'

import { BuyNow } from '../assets/img'

const Navbar = () => {
    return (
        <nav className='max-container px-16 py-8 font-montserrat text-xl text-primary'>
            <div className='flex items-start justify-between'>
                <div className='flex-1'>
                    <Link to='/' className='hover:text-secondary'><img src={BuyNow} alt="LOGO" className='w-[90px]'/></Link>
                </div>
                <div className='flex items-center flex-1 justify-end gap-10'>
                    <Link to='/login' className='hover:text-secondary'>Sign In</Link>
                    <Link to='/register' className='hover:text-secondary'>Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
