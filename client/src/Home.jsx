import React from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import './assets/Home.css'

const Home = () => {

  

  return (
    <div className='home'>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap')
</style>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Akronim&display=swap')
</style>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap')
    </style>
      <h2 className='titlecard'>Career Crafter</h2>
      <p className='quote'>In the symphony of life, your career is the melody that resonates through time. With Career Crafter, let the notes of your skills and talents create a harmonious tune. Tune in to the rhythm of success as you explore and embrace the crescendo of possibilities
  
      </p>
      <h3>Your dream job is just a click away. Seize the opportunity!</h3>
      <br />
      <div className='buttons'>
      <a href="/register"><button className='reg'>Register</button></a>
      <a href="/login"><button className='log'>Login</button></a>
      </div>

      </div>
  )
}

export default Home
