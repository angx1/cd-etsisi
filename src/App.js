
import React, { useState } from 'react'
import './App.css';
import NavBar from './components/nav-bar.jsx';
import Home from './components/home.jsx';



function App(props) {



  const [nabvar_state, setNavBarState] = useState(true);
  const [home_state, setHomeState] = useState(true);


  const handleShowingNavBar = () => {
    nabvar_state ? setNavBarState(false) : setNavBarState(true);
  }


  const handleReturnHome = () => {
    setNavBarState(false); 
    setHomeState(true);
  }


  return (
    <>
  
      <NavBar  
        onShowingNavBar={() => handleShowingNavBar()} 
        showNavBar={nabvar_state} 
        onReturnHome={() => handleReturnHome()}
        />


    {home_state ? <Home/> : <></>}
    </>
  );  
}

export default App; 
