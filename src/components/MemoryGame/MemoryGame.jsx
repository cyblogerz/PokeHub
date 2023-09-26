import React from 'react'

const MemoryGame = () => {
    
  return (
    <div className="bg-[url(pokemon-bg.png)] bg-cover h-screen pt-20 flex flex-col justify-center items-center">
    <h1 className="text-xl mb-10 ">Score : 0 &nbsp; High Score : 🏆5</h1>
<div className="grid grid-cols-4  md:flex md:flex-row gap-4 h-full">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  
</div>
</div>
  )
}

export default MemoryGame