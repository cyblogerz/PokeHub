import { useEffect, useState } from "react";
import './PokeList.css'

const PokeList = (props) => {
    const [pokemonData,setPokemonData] = useState([]);
    let apiUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12";
    useEffect(()=>{
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data)=>{
            setPokemonData(data.results)})
        .catch((error) => console.error("Error Fetching data:",error))
    },[apiUrl]);

    

  return (
    <div className="grid-container">
        
            {pokemonData.map((pokemon,index)=>(
                <div className="box" key={index}>
            <a href={pokemon.url}>{pokemon.name}</a>
          </div>
            ))}
        
    </div>
  )
}

export default PokeList