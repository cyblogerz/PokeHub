

const PokeCard = (props) => {
    const title = props.pokemonName;
    const imageUrl = props.pokemonImgUrl;
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
       <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <img src= {imageUrl} alt="image" className="h-40 w-40"/>
    </div>
  )
}

export default PokeCard