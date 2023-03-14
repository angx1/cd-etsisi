
import React, { useState } from 'react'
import './App.css';
import NavBar from './components/nav-bar.jsx';
import Home from './components/home.jsx';
import Manifesto from './components/manifesto.jsx';
import AboutUs from './components/about-us.jsx';



function App(props) {



  const [nabvar_state, setNavBarState] = useState(true);
  const [home_state, setHomeState] = useState(true);
  const [manifesto_state, setManifestoState] = useState(false);
  const [about_state, setAboutState] = useState(false);


  const handleShowingNavBar = () => {
    nabvar_state ? setNavBarState(false) : setNavBarState(true);
  }


  const handleReturnHome = () => {
    setNavBarState(false); 
    setHomeState(true);
    setManifestoState(false);
    setAboutState(false);
  }
  const handleShowingManifesto = () => {
    setNavBarState(false); 
    setHomeState(false);
    setManifestoState(true);
    setAboutState(false);
  }
  /*
  const handleShowingAbout = () => {
    setNavBarState(false); 
    setHomeState(false);
    setManifestoState(false);
    setAboutState(true);
  }

*/

  return (
    //RENDER
    <>
      
      <NavBar  
        onShowingNavBar={() => handleShowingNavBar()} 
        showNavBar={nabvar_state} 
        onReturnHome={() => handleReturnHome()}
        onShowingManifesto={() => handleShowingManifesto()}
        onShowingAbout={() => {
          setNavBarState(false); 
          setHomeState(false);
          setManifestoState(false);
          setAboutState(true);
        }}
        />


    {home_state ? <Home/> : <></>}
    {manifesto_state ? <Manifesto/> : <></>}
    {about_state ? <AboutUs/> : <></>}
    </>
  );  
}

export default App; 
