import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './assets/Company.css'


const User = () => {

    const [post,setPost]=useState([]);

useEffect(()=>{
    const handleLoad= async(e)=>{
      axios.post('https://job-portal-9k8b.onrender.com/needall')
      .then(result=>{
        console.log(result)
        setPost(result.data)
      })
      .catch(err=>console.error(err))
  }
  handleLoad();
  },[])

  console.log("all_post",post)

  return (
    <div className='company'>
        <center><h2>All Openings</h2></center><br />
        <div className='cards-container'>
      {post ? post.map((job, index) => (
        <div className='cards'>
        <div key={index} className='card'>
          <h3 className='jobtitle'>{job.jobtitle}</h3><br />
          <p><b>Company : {job.companyname}</b></p><br />
          <p className='jd'><b >Job Description:</b> {job.desc}</p><br />
          <p><b>Location:</b> {job.location}</p>
          <p><b>Salary:</b>{job.salary}</p>
          <p><b>Contact:</b>{job.contact}</p> 
          
        </div>
        </div>

        
      )) : ''}
      </div>
    </div>
  )
}

export default User
