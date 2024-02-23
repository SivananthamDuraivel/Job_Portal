import React from 'react'
import './assets/NavbarStyle.css'
const Navbar = () => {
    
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
      
  return (
    <div>
    <div className="topnav" id="myTopnav">
    <a href="/" className="active">Home</a>
    <div className='rightend'>
    <a href="/login">Login</a>
    <a href="/register">Sign-up</a>
    <a href="#about">About</a>
    </div>
    <a href="#" className="icon" onClick={myFunction}>
      <span>☰</span>
    </a>
  </div>
    </div>
  )
}

export default Navbar
