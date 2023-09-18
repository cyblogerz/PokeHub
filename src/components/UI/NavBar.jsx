import Logo from '../Icons/Logo.svg';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineTwitter} from 'react-icons/ai';


const NavBar = () => {
  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between ">
        <div>
        <span className="text-2xl font-[Poppins] cursor-pointer">
        <img src={Logo} alt="logo" className="h-7 inline mr-4" />
            PokeHub
        </span>
        </div>
        <ul>
            <li>
                <a href="#"><BsGithub className='w-7 h-7'/></a>
            </li>
            <li>
                <a href="#"><AiOutlineTwitter className='w-7 h-7'/></a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar