
import React, { useState } from 'react'
import './App.css';
import NavBar from './components/nav-bar.jsx';
import Home from './components/home.jsx';
import Manifesto from './components/manifesto.jsx';



function App(props) {



  const [nabvar_state, setNavBarState] = useState(true);
  const [home_state, setHomeState] = useState(true);
  const [manifesto_state, setManifestoState] = useState(false);


  const handleShowingNavBar = () => {
    nabvar_state ? setNavBarState(false) : setNavBarState(true);
  }


  const handleReturnHome = () => {
    setNavBarState(false); 
    setHomeState(true);
    setManifestoState(false);
  }
  const handleShowingManifesto = () => {
    setNavBarState(false); 
    setHomeState(false);
    setManifestoState(true);
  }



  return (
    <>
  
      <NavBar  
        onShowingNavBar={() => handleShowingNavBar()} 
        showNavBar={nabvar_state} 
        onReturnHome={() => handleReturnHome()}
        onShowingManifesto={() => handleShowingManifesto()}
        />


    {home_state ? <Home/> : <></>}
    {manifesto_state ? <Manifesto/> : <></>}
    </>
  );  
}

export default App; 
