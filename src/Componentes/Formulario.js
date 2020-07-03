import React,  {useState} from 'react';


function Formulario({askingAPILiric}){

 const [search, addSearch] = useState({
    artista: ' ',
    cancion: ' '  
 })
//function to load the states of inputs
 const reloadState = e => {
     addSearch({
         ...search,
         [e.target.name] : e.target.value

     });
 }

 //when we do submit to form 
 const sendInformation = e => {
     e.preventDefault ();

     askingAPILiric(search);
     
 }






    return(
    <div className="bg-info">
    <div className="container">
        <div className="row">
            <form 
              onSubmit = {sendInformation}
              className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                <fieldset>
                    <legend className="text-center">Buscador Letras Canciones</legend>
                    <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                              <label>Artist</label>
                              <input 
                                  type="text" 
                                  className="form-control" 
                                  name="artista" 
                                  placeholder="Nombre Artista" 
                                  required
                                  onChange={reloadState}
                              />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                              <label>Canción</label>
                              <input 
                                  type="text" 
                                  className="form-control" 
                                  name="cancion" 
                                  placeholder="Nombre Canción" 
                                  required
                                  onChange={reloadState}
                              />
                          </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Buscar</button>
                </fieldset>
            </form>
        </div>
    </div>
</div>
)
}

export default Formulario;