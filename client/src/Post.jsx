import React, { useTransition } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './assets/Post.css'

const Post = () => {

  const navigate=useNavigate()
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('https://job-portal-9k8b.onrender.com/post',{jobtitle,companyname,desc,location,salary,contact})
    .then(result=>{
      console.log(result)
        // navigate('/company') 
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
     <h2>Create New Post</h2><br />
     <form action="" className='form' onSubmit={handleSubmit}>
     <input  required type="text" name="" id="" onChange={(e)=>setJobTitle(e.target.value)} placeholder='Enter the Job Title'/><br />
     <input  required type="text" name="" id="" onChange={(e)=>setCompanyName(e.target.value)} placeholder='Enter the Company name'/><br />
     <input  required type="text" name="" id="" onChange={(e)=>setDesc(e.target.value)} placeholder='Enter the Job Description'/><br />
     
         <input required type="text" name="" id="" onChange={(e)=>setLocation(e.target.value)} placeholder='Enter Location'/><br />
         <input required type="text" name="" id="" onChange={(e)=>setSalary(e.target.value)} placeholder='Enter Salary'/><br />
         <input required type="text" name="" id="" onChange={(e)=>setContact(e.target.value)} placeholder='Contact Info'/><br />

    <button className='postbutton' style={{fontSize:'medium','padding':0}} ><p>create post</p></button>
 
   </form>
     </center>
    </div>
  )
}

export default Post
