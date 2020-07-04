import React,  {useEffect, useState, Fragment} from 'react';
import Formulario from './Componentes/Formulario';
import axios from 'axios';
import Cancion from './Componentes/Cancion';
import Informacion from './Componentes/Informacion'

function App(){

  //use useState with 3 differents ones
  const [artista, addArtista] = useState('');
  const [liric, addLiric] = useState([]);
  const [info, addInfo] = useState({}); 

//creating a method to ask to the api liric songs 
const askingAPILiric = async search => {
  const {artista, cancion} = search;
  const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

  //asking to the API 
   const result =  await axios(url);

  //save the artist  that i searched 
  addArtista(artista)

   //savethe liric existing
   addLiric(result.data.lyrics)


}

//Method to ask the Info Api 
const askingAPIInfo = async() => {
  const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

  const result = await axios(url);
 
 addInfo(result.data.artists[0]);
  //console.log(info);
}

useEffect(
  () => {
  askingAPIInfo();

  }, [artista]
)

  return (

    <Fragment>
      <Formulario askingAPILiric={askingAPILiric}
      />

    <div className="container mt-5">
      <div className="row">
      <div className="col-md-6"></div>
       <Informacion info={info}/>
      <div className="col-md-6">
        <Cancion 
        liric={liric}/>
      </div>
    </div>
</div>
    </Fragment>
  )
}

export default App;

