import React from 'react'
import logo1 from '../images/logo1-black.svg'
import logo4 from '../images/logo2-white.svg'


const Rotator = (props) => {

    return ( 

        <>
            <div className="position-absolute top-50 start-50 translate-middle"><img src={logo1} className='Rotator1'/></div> 
            <div className="position-absolute top-50 start-50 translate-middle"><img src={logo4} className='Rotator2'/></div> 
        </>



     );
}
 
export default Rotator;