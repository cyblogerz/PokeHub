import Logo from '../Icons/Logo.svg';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineTwitter} from 'react-icons/ai';
import SearchBar from './SearchBar';


const NavBar = () => {
  return (
    <nav className="p-5 bg-white shadow flex items-center justify-between">
        <div>
        <span className="text-2xl font-[Poppins] cursor-pointer">
        <img src={Logo} alt="logo" className="h-7 inline mr-4" />
            PokeHub
        </span>
        </div>
        <ul className='flex items-center'>
            <li className='mx-2'>
                <a href="#"><BsGithub className='w-7 h-7'/></a>
            </li>
            <li className='mx-2'>
                <a href="#"><AiOutlineTwitter className='w-7 h-7'/></a>
            </li>
            <li>
                <SearchBar />
            </li>
        </ul>
    </nav>
  )
}

export default NavBar