import { useState } from "react";

const PokeCard = (props) => {
    const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};
const cardStyles = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease', // Adjust the duration and easing as needed
  };

    const title = props.pokemonName;
    const imageUrl = props.pokemonImgUrl;
  return (
    <div className="bg-white shadow-md rounded-lg p-4 "   style={cardStyles} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
       <h2 className="text-xl font-semibold mb-2">{title}</h2>
       <div className="flex justify-center ptop-2">
       <img src= {imageUrl} alt="image" className="w-1/2 h-1/2"/>
       </div>
      
    </div>
  )
}

export default PokeCard