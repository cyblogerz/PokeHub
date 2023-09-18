import React from 'react'

const PokeDetailCard = (props) => {
    const findStat = (statName) => props.stats.find((stat) => stat.stat.name === statName)?.base_stat;
  return (
    <div className='container bg-white shadow-md rounded-lg md:w-1/3 p-10'>
    <h1 className='text-4xl font-bold pb-2'>{props.name} </h1> 
    <div>{props.types.map((type) => (
          <span className='border-2 border-black rounded-lg px-4 mr-2 ' key={type.type.name}>{type.type.name}</span>
        ))}</div>
        
    <img src= {`https://img.pokemondb.net/artwork/large/${props.name}.jpg`} alt="image" className=" w-1/2 h-1/2 py-10"/>



    <div className='flex md:flex-row     pb-4'>
        <div className='pr-4'>
            <p className='text-sm'>Height</p>
            <p className='text-3xl font-bold'>{props.height} m</p>
        </div>
        <div>
            <p className='text-sm'>Weight</p>
            <p className='text-3xl font-bold'>{props.weight} kg</p>
        </div>
        
    </div>

    <ul>
        <li>HP: {findStat('hp')}</li>
        <li>Attack: {findStat('attack')}</li>
        <li>Defense: {findStat('defense')}</li>
        <li>Special Attack: {findStat('special-attack')}</li>
        <li>Special Defense: {findStat('special-defense')}</li>
        <li>Speed: {findStat('speed')}</li>
      </ul>




    </div>
  )
}

export default PokeDetailCard