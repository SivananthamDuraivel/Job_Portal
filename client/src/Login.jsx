import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [id,setId]=useState();

    const [errorMessage,setErrorMessage]=useState();

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/login',{email,password})
        .then(result=>{console.log(result)
        if(result.data.message=="success")
        {  
          navigate('/home')
        }   
        else
          setErrorMessage("This combination doesn't exists")
        })
        .catch(err=>console.error(err))
    }

  return (
    <div className='container'>

    <form action="" className='form' onSubmit={handleSubmit}>

    <label htmlFor="email">Email</label><br />
    <input type="email" name="email" id="email" autoComplete='username' onChange={(e)=>setEmail(e.target.value)} /><br />

    <label htmlFor="pass">Password</label><br />
    <input type="password" name="pass" id="pass" autoComplete='new-password' onChange={(e)=>setPassword(e.target.value)}/><br /><br />

    <button>Login</button><br />

    {errorMessage? <b style={{color:'red'}}>{errorMessage}</b> :null}

    <center><p>Dont have an account? <a href="/register">Sign-up</a></p></center>
</form>
    
    </div>
  )
}

export default Login
