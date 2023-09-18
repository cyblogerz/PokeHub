import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetails() {
  const { pokemonid } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  

  useEffect(() => {
    // Fetch data for the specific Pokémon using the API
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.error('Error fetching Pokémon data:', error));
  }, [pokemonid]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  // Extract relevant details from 'pokemonData'
  const { name, height, weight, abilities, types } = pokemonData;

  return (
    <div>
      <h2>{name}</h2>
      <p>Height: {height / 10} m</p>
      <p>Weight: {weight / 10} kg</p>
      <h3>Abilities:</h3>
      <ul>
        {abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>Types:</h3>
      <ul>
        {types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetails;
