import React, { useState } from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button.jsx'

import {BuyNow} from '../../assets/img/index.js'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {email, password};
        
        try{
            console.log({data})   
            // reset value
            setEmail("")
            setPassword("")
        }catch(err){
            console.log(err);
        }
    }


    return (
        <div className='mt-16 relative max-w-sm max-sm:max-w-xs mx-auto flex flex-col items-center justify-center gap-5'>
            <h1 className='text-3xl cursor-default font-palanquin font-semibold text-primary'>Welcome to BuyNow</h1>  
            <p className='text-2xl cursor-default font-palanquin text-primary'>Sign In</p>
            <form 
                action="html"
                onSubmit={handleSubmit}
                className='w-full flex flex-col items-center justify-center gap-5'
            >
                <Input type="email" placeHolder="Email address" name={email} onChange={(e) => setEmail(e.target.value)} value={email}/>
                <Input type="password" placeHolder="Passwrod" name={password} onChange={(e) => setPassword(e.target.value)} value={password}/>
                <Button type="submit" btnLabel="Login" />
            </form>
            <Link to='/register' className='text-sm cursor-pointer text-primary hover:text-btn focus:text-btn underline absolute -bottom-[8%] right-0'>create an account.</Link>
        </div> 
    )
}

export default Login
