import { useState } from "react";
import { Link } from "react-router-dom";

const PokeCard = (props) => {
//     const [isHovered, setIsHovered] = useState(false);

// const handleMouseEnter = () => {
//   setIsHovered(true);
// };

// const handleMouseLeave = () => {
//   setIsHovered(false);
// };
// const cardStyles = {
//     transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//     transition: 'transform 0.3s ease', 
//   };

    const title = props.pokemonName;
    const imageUrl = props.pokemonImgUrl;
  return (
    
    <div className=" transition ease-in-out delay-50  hover:scale-110  bg-white shadow-md rounded-lg p-4 ">
      <Link to={`/pokemon/${title}`}>
       <h2 className="text-xl font-semibold mb-2">{title}</h2>
       <div className="flex justify-center ptop-2">
       <img src= {imageUrl} alt="image" className="w-1/2 h-1/2"/>
       </div>
       </Link>
      
    </div>
   
  )
}

export default PokeCard