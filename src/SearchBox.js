import React from 'react';

const SearchBox=({searching})=>{

    return(
        <div className="pa2">
            <input type='search' placeholder='search robots' className="bg-light-blue dib br3 pa3 ma2 grow dim bw2 shadow-3" onChange={searching}/>
        </div>
        
    )
}

export default SearchBox