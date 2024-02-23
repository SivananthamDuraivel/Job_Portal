import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './assets/Style.css';

const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    

    const [errorMessage,setErrorMessage]=useState();

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://job-portal-9k8b.onrender.com/login',{email,password})
        .then(result=>{console.log(result)
         // console.log(result.data.id)
        if(result.data.message=="success")
        {  
          navigate('/User')
        }   
        else
          setErrorMessage("This combination doesn't exists")
        })
        .catch(err=>console.error(err))
    }

    const handleCompany=(e)=>{
      e.preventDefault()
      axios.post('https://job-portal-9k8b.onrender.com/companylogin',{email,password})
      .then(result=>{console.log(result)
       // console.log(result.data.id)
      if(result.data.message=="success")
      {  
        navigate(`/company?cname=${result.data.cname}`)
      }   
      else
        setErrorMessage("This combination doesn't exists")
      })
      .catch(err=>console.error(err))
  }

  return (
    <div className='full'>
    <br />
    <center><h1>Welcome Back!</h1></center>
    <div className='container'>
    <form action="" className='form' onSubmit={handleSubmit}>

    <label htmlFor="email">Email</label><br />
    <input required type="email" name="email" id="email" autoComplete='username' onChange={(e)=>setEmail(e.target.value)} /><br />

    <label htmlFor="pass">Password</label><br />
    <input  required type="password" name="pass" id="pass" autoComplete='new-password' onChange={(e)=>setPassword(e.target.value)}/><br /><br />

    <button>Login</button><br />
    <button onClick={handleCompany} type='submit'>Company Login</button><br />

    {errorMessage? <b style={{color:'red'}}>{errorMessage}</b> :null}

    <center><p>Dont have an account? <a href="/register">Sign-up</a></p></center>
</form>
    
    </div>
    </div>
  )
}

export default Login
