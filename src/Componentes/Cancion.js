import React, {Fragment} from 'react';

function Cancion ({liric}) { 

    if(liric.length === 0 ) return null;
    
    return(
        <Fragment>
            <h2>Letra de la Canción</h2>
            <p className="letra">{liric}</p>
    
        </Fragment>
    )
}

export default Cancion;