import React, { useState } from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button.jsx'

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
        <div className='h-screen flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl font-palanquin font-semibold text-primary'>Welcome to Buy Me</h1>  
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
        </div>
    )
}

export default Register
