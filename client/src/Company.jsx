import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Post from './Post';
import './assets/Company.css'

const Company = () => {

  const [post,setPost]=useState([]);
  const [visible,setVisible]=useState(false);

  const visibility=(e)=>{
    setVisible(!visible)
  }



  useEffect(()=>{
    const handleLoad= async(e)=>{  
      console.log("handleload");
      axios.post('http://localhost:3000/findcompany',{cname})
      .then(result=>{
        console.log(result)
        setPost(result.data)
      })
      .catch(err=>console.error(err))
  }
  handleLoad();
  },[])

  console.log("post",post)

  let location = useLocation();
    let queryParams = new URLSearchParams(location.search);
    let cname = queryParams.get('cname');
    // localStorage.setItem("myKey", cname);
    // cname = localStorage.getItem("myKey");  
    console.log("sakthi",cname);

  

  return (
    <div className='company'>
      <div className='static'>
        <center><h1>Welcome {post && post.length>0 && post[0].companyname }</h1></center>
        <button onClick={visibility} className='addbutton'>Add Job</button>
        </div>
        <center className='post'>
        {visible?<Post/>:''}
        <br />
        </center>
      
      
      <center>
      <div className='cards-container'>
      {post ? post.map((job, index) => (
        <div className='cards'>
        <div key={index} className='card'>
          <h3>{job.jobtitle}</h3><br />
          <p className='jd'><b>Job Description:</b> {job.desc}</p><br />
          <p><b>Location:</b> {job.location}</p>
          <p><b>Salary:</b>{job.salary}</p>
          <p><b>Contact:</b>{job.contact}</p>
          
        </div>
        </div>

        
      )) : ''}
      </div>
      </center>
      
    
    </div>
  )
}

export default Company
