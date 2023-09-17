import { useEffect, useState } from "react"

const PokeList = (props) => {
    const [pokemonData,setPokemonData] = useState([]);
    let apiUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
    useEffect(()=>{
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data)=>{
            console.log(pokemonData);
    console.log("hello");
            setPokemonData(data.results)})
        .catch((error) => console.error("Error Fetching data:",error))
    },[apiUrl]);

    

  return (
    <div>
        <ul>
            {pokemonData.map((pokemon,index)=>(
                <li key={index}>
            <a href={pokemon.url}>{pokemon.name}</a>
          </li>
            ))}
        </ul>
    </div>
  )
}

export default PokeList