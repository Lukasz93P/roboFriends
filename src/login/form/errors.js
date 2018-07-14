import React from 'react';

const Errors=({errors})=>{

    console.log(errors)
    return(
        errors.length>0 &&
        <div className='alert br3'>
            {errors.map((error,index)=> <p key={index}>{error.detail}</p>) }
        </div>


    )

}

export default Errors