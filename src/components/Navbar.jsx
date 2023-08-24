import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Input from './Input'

import { navbarLinks } from '../constant'

import { BuyNow } from '../assets/img'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <nav className='max-container padding font-montserrat text-xl text-primary'>
            <div className='flex items-start max-sm:items-center justify-between gap-10 max-sm:gap-6'>
                <div className=''>
                    <Link to='/' className='hover:text-secondary'><img src={BuyNow} alt="LOGO" className='w-[90px] max-sm:w-[60px]'/></Link>
                </div>
                <div className='max-w-2xl flex-1 flex flex-col items-center gap-8 justify-center'>
                    <div className='max-w-xl w-full'>
                        <Input type="text" placeHolder={"Search"}/>
                    </div>
                    <div className='max-sm:hidden w-full flex items-center justify-around max-lg:text-base'>
                        {navbarLinks.map((link) => (
                            <Link to={link.href} className='hover:text-secondary'>{link.name}</Link>
                        ))}
                    </div>
                </div>
                <div className='sm:hidden block' onClick={() => {setMenuToggle(!menuToggle)}}>
                    {
                        menuToggle 
                        ? <AiOutlineClose className='h-[30px] w-[30px]' /> 
                        : <AiOutlineMenu className='h-[30px] w-[30px]'/> 
                    }
                </div>
                <div className={`absolute bg-slate-400 w-full bottom-0 right-0 top-[96px] ${menuToggle ? "opacity-100 transition duration-300 ease-out" : "hidden opacity-0 transition duration-150 ease-in"} z-[10]`}>
                    <div className='w-full flex items-center justify-center'>
                        <div className='padding flex flex-col items-start justify-start gap-10 text-black'>
                            {navbarLinks.map((link) => (
                                <Link to={link.href} className='hover:text-secondary' onClick={() => setMenuToggle(!menuToggle)}>{link.name}</Link>
                            ))}
                        </div>
                    </div>
                </div> 
                
            </div>
        </nav>
    )
}

export default Navbar
