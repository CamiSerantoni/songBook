import React,  {useEffect, useState, Fragment} from 'react';
import Formulario from './Componentes/Formulario';
import axios from 'axios';

function App(){

  //use useState with 3 differents ones
  const [artist, addArtist] = useState('');
  const [liric, addLiric] = useState([]);
  const [info, addInfo] = useState({}); 

//creating a method to ask to the api liric songs 

const askingAPILiric = async search => {
  const {artista, cancion} = search;
  console.log(search);
  const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

  //asking to the API 
   const result =  await axios(url);
   console.log(result.data.lyrics);
}

  return (

    <Fragment>
      <Formulario askingAPILiric={askingAPILiric}/>
    </Fragment>
  )
}

export default App;

