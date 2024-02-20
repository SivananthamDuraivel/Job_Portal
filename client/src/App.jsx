import { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Post from './Post'



function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/post' element={<Post/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
