
import React, { useState } from 'react'
import Rotator from './components/rotator';
import './App.css';
import logo1 from './images/logo1-black.svg'
import logo2 from './images/logo2-black.svg'
import logo3 from './images/logo1-white.svg'
import logo4 from './images/logo2-white.svg'
import logo5 from './images/logo1-yellow.svg'
import logo6 from './images/logo2-yellow.svg'


function App(props) {



  






  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle"><img src={logo1} className='Rotator1'/></div> 
      <div className="position-absolute top-50 start-50 translate-middle"><img src={logo4} className='Rotator2'/></div> 
      
    </>
  );  
}

export default App; 
