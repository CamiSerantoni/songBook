import React from 'react';

function Informacion({info}) { 

    if(Object.keys(info).length === 0 ) return; 



    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-center  text-light font-weight-bold">
                Información Artista            
            </div>
            <div className="card-body">
                <img className="artist-photo"  src={info.strArtistThumb} alt="Logo Artista"/>
                <p className="card-text"> Género Musical: {info.strGenre} 
                </p>
                <div class="border-primary">
                    <h2 className="card-text text-center"> Biografía</h2>
                    <p className="card-text"> {info.strBiographyES}</p>
                </div>
                <p className="card-text "> 
                <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-lastfm"></i>
                </a>
                </p>

            </div>    



        </div> 

    )


}

export default Informacion;