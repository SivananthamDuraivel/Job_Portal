import React, { useState } from 'react'
import './assets/Style.css';
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [name ,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const [errorMessage,setErrorMessage]=useState();

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/register',{name,email,password})
        .then(result=>{
          console.log(result)
          if(!result.data==='name already exists')
            navigate('/login')
          else
            setErrorMessage("user name already exists")
        })
        .catch(err=>console.error(err))

    }

    const handleCompany=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:3000/companyregister',{name,email,password})
      .then(result=>{
        console.log(result)
        if(result.data==='new user')
          navigate('/login')
        else
          setErrorMessage("user name already exists")
      })
      .catch(err=>console.error(err))

  }


  return (    
    <div className='full'>
    <center><h2 style={{color:'whitesmoke'}}>Job Awaits You</h2></center><br />
    <div className='container'>

    <form action="" className='form' onSubmit={handleSubmit}>

    <label htmlFor="name">Name</label><br />
    <input  required type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}/><br />

    <label htmlFor="email">Email</label><br />
    <input  required type="email" name="email" id="email" autoComplete="username" onChange={(e)=>setEmail(e.target.value)} /><br />

    <label htmlFor="pass">Password</label><br />
    <input  required type="password" name="pass" id="pass" autoComplete='new-password' onChange={(e)=>setPassword(e.target.value)}/><br /><br />

    <button>Register</button><br />
    <button onClick={handleCompany}>Company Register</button><br />

    {errorMessage?<b style={{ color: 'red' }}>{errorMessage}</b>:null}

    <center><p>Already have an account? <a href="/login">Login</a></p></center>
</form>
    
    </div>
    </div>
  )
}

export default Signup
