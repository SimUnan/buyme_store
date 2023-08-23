import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import Input from '../../components/Input'
import Button from '../../components/Button.jsx'

import {BuyNow} from '../../assets/img/index.js'

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cfPassword, setCfPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {username, email, password, cfPassword};
        
        try{
            console.log({data})   
            // reset value
            setUsername("")
            setEmail("")
        }catch(err){
            console.log(err);
        }
    }


    return (
        <div className='mt-32 relative max-w-sm max-sm:max-w-xs mx-auto flex flex-col items-center justify-center gap-5'>
            <h1 className='text-3xl cursor-default font-palanquin font-semibold text-primary'>Welcome to BuyNow</h1>  
            <p className='text-2xl cursor-default font-palanquin text-primary'>Sign Up</p>
            <form 
                action="html"
                onSubmit={handleSubmit}
                className='w-full flex flex-col items-center justify-center gap-5'
            >
                <Input type="text" placeHolder="Username" name={username} onChange={(e) => setUsername(e.target.value)} value={username}/>
                <Input type="email" placeHolder="Enter Email address" name={email} onChange={(e) => setEmail(e.target.value)} value={email}/>
                <Input type="password" placeHolder="Enter Passwrod" name={password} onChange={(e) => setPassword(e.target.value)} value={password}/>
                <Input type="password" placeHolder="Confirm Password" name={cfPassword} onChange={(e) => setCfPassword(e.target.value)} value={cfPassword}/>
                <Button type="submit" btnLabel="Register" />
            </form>
            <Link to='/login' className='text-sm text-primary hover:text-btn focus:text-btn underline cursor-pointer absolute -bottom-[5%] right-0'>Already have an accout.</Link>
        </div> 
    )
}

export default Register
