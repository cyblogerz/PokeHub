import React from 'react'

const MemoryCard = (props) => {
  return (
    <button className="border md:h-1/2 md:w-1/2 rounded-2xl bg-white  mt-10 p-2" onClick={props.onClick}>
    <div className='flex flex-col'>
    <img src={`https://img.pokemondb.net/sprites/home/normal/${props.name}.png`} alt="" />
    <p>{props.name}</p>
    </div>
</button>
  )
}

export default MemoryCard