import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Navbar from './components/Navbar';

function App() {
 

  return (
    <> 
    <Router>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/profile' element={<Profile/>}/>
     </Routes>
    </Router>
     
   
    </>
  )
}

export default App
