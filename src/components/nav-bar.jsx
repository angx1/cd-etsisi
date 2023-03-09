import React from 'react'


const NavBar = (props) => {
    
    const uli = 
    <>
        <div className='d-flex flex-col border border-dark rounded-3'  id='nav-bar-list'>
            <ul className=" mb-1" id="nav">
                <span href="" className="list-group-item" onClick={() => props.onReturnHome()}><li>ABOUT US</li></span>
                <span href="" className="list-group-item" onClick={() => props.onShowingManifesto()}><li>MANIFESTO</li></span>
                <span href="" className="list-group-item" onClick={() => props.onReturnHome()}><li>---  HOME</li></span>
            </ul>
        </div>        
    </>   
    


    
    return ( 
        <>    
        <div className="border border-dark rounded-pill" id='nav-bar' onClick={() => props.onShowingNavBar()/*props.onShowingNavBar*/}>
            <span className='position-absolute top-50 start-50 translate-middle '>+</span>
        </div>
        {props.showNavBar ? uli : <></>}
        </>
     );
}
 
export default NavBar;