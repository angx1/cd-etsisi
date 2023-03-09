import React, { PureComponent } from 'react';



const Rotator = (props) => {

    const styles = {
        width: 200,
        height:200,
        backgroundColor: 'black',
    };

    return ( 

        <>
            <div style={styles} class="position-absolute top-50 start-50 translate-middle"></div>
        </>



     );
}
 
export default Rotator;