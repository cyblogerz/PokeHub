import React, { useEffect, useState } from 'react'
import MemoryCard from './MemoryCard';

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  

const MemoryGame = () => {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=6';
    const [pokemons,setPokemons] = useState([]);

    const btnClick = () => {
        setPokemons(shuffleArray(pokemons))
    }

    useEffect(()=>{
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setPokemons(data.results))
    },[]);
      
  return (
    <div className="bg-[url(pokemon-bg.png)] bg-cover h-screen pt-20 flex flex-col justify-center items-center">
    <h1 className="text-xl mb-10 ">Score : 0 &nbsp; High Score : 🏆5</h1>
<div className="grid grid-cols-4  md:flex md:flex-row gap-4 h-full md:w-[90%]">
{pokemons.map((pokemon)=>{
    return(
    <MemoryCard name={pokemon.name} onClick={btnClick}/>
    )

})}
</div>
</div>
  )
}

export default MemoryGame