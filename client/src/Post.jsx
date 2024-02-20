import React, { useTransition } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './assets/Post.css'

const Post = () => {

  const navigate=useNavigate()
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/post',{jobtitle,companyname,desc,location,salary,contact})
    .then(result=>{
      console.log(result)
        navigate('/home') 
    })
}

  const [jobtitle,setJobTitle]=useState();
  const [companyname,setCompanyName]=useState();
  const [desc,setDesc]=useState();
  const [location,setLocation]=useState();
  const [salary,setSalary]=useState();
  const [contact,setContact]=useState(); 
  
  return (
    <div className='postbox'>
     <center>
     <h2>Create New Post</h2>
     <form action="" className='form' onSubmit={handleSubmit}>
     <input type="text" name="" id="" onChange={(e)=>setJobTitle(e.target.value)} placeholder='Enter the Job Title'/><br />
     <input type="text" name="" id="" onChange={(e)=>setCompanyName(e.target.value)} placeholder='Enter the Company name'/><br />
     <input type="text" name="" id="" onChange={(e)=>setDesc(e.target.value)} placeholder='Enter the Job Description'/><br />
     
         <input type="text" name="" id="" onChange={(e)=>setLocation(e.target.value)} placeholder='Enter Location'/><br />
         <input type="text" name="" id="" onChange={(e)=>setSalary(e.target.value)} placeholder='Enter Salary'/><br />
         <input type="text" name="" id="" onChange={(e)=>setContact(e.target.value)} placeholder='Contact Info'/><br />

    <button>create post</button>
 
   </form>
     </center>
    </div>
  )
}

export default Post
