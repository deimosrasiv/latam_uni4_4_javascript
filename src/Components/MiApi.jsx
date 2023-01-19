import { useEffect, useState } from 'react';
import Footer from './footer'


const MIApi = () => {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState("ASC")
  

  const sorting = (col) => {
    if (order === "ASC"){
      const sorted = [...characters].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setCharacters(sorted);
      setOrder("DSC");
    }
    if (order === "DSC"){
      const sorted = [...characters].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setCharacters(sorted);
      setOrder("ASC");
    }
  }

  
  const getData = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json()
      setCharacters(data.results)
    //  console.log(data.results)

  }
  useEffect(() => {
    getData();
  
  }, []);


    
  return (
    <> 
          <div>
          
        <nav className={`navbar navbar-dark bg-light  rounded mt-3 mb-5`}>
            <div className="container-fluid">
                      <input
                          className='form-control my-2 mx-2'
                          type="text"
                          placeholder='Buscador por Nombre'
                          onChange={(e) => setSearch(e.target.value)}
                          value={search}
                      />
                
          </div>
          
        </nav>

              <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                          <th onClick={() => sorting('name')} scope='col'>Nombre</th>
                          <th onClick={() => sorting('gender')} scope='col'>Genero</th>
                          <th onClick={() => sorting('species')} scope='col'>Especie</th>
                    <th scope='col'>Imagen</th>
                    
                </tr>
            </thead>

          
          {characters
            .filter((itemFil) => itemFil.name.toLowerCase().includes(search))
            .map((item) => (

                <tbody key={item.id}>
                    <tr>
                        <th scope='row'><strong>{item.id}</strong></th>
                        <td ><strong>{item.name}</strong></td>
                        <td ><strong>{item.gender}</strong></td>
                        <td ><strong>{item.species}</strong></td>
                        <td ><img className='image' src={item.image} alt=""/></td>
                    </tr>
                </tbody>
       
            ))}
        </table>
          
        </div>
      <Footer footer=" © 2020-2021 Santiago, Chile Ð€IMØ§¯®Ã§Iv Todos los derechos reservados."/>
    </>
  );
};

export default MIApi
