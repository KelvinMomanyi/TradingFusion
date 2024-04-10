import {useContext, useState} from 'react'
import { CgProfile } from "react-icons/cg";
import { IoMoonOutline } from "react-icons/io5";
import ThemeContext from '../context/ThemeContext';
import { AiOutlineStock } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { FaSearch } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  //@ts-ignore
    const {darkMode, setDarkMode } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
         setIsMenuOpen(prevState => !prevState);
      };
    const buttons = [
      { id: 1, label: 'Home', link: '/' },
      { id: 2, label: 'Portfolio', link: '/portfolio' },
      { id: 3, label: 'Market', link: '/market' },
      { id: 4, label: 'Orders', link: '/orders' },
      { id: 5, label: 'Profile', link: '/profile' },
    ];
    
  return (
    <div className={`w-full h-16 flex justify-between align-center border-b  p-10 ${ darkMode ? "bg-gray-900" : "bg-slate-100"}`}>
        <div className='flex items-center'>
          <AiOutlineStock size={60}/>
          <h1 className='text-lg font-primary py-3'>TradingFusion</h1>
        </div>
        <div className='lg:block hidden'>
          <div className='h-full relative flex items-center '>
           <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <FaSearch className="text-gray-400" />
            </div>
            <input type="text" placeholder="Search..." className="bg-gray-700 text-white px-8  py-1 rounded-full focus:outline-none focus:ring focus:ring-blue-400" />
            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
        </div>
        <div className='lg:block hidden'>
           <div className="h-full flex space-x-4 items-center">
             {buttons.map(button => (
              <a key={button.id} href={button.link} className={`${ darkMode ?  "text-white" : "text-gray-900" } hover:text-gray-300 px-3 py-2 rounded-full transition-colors hover:bg-gray-700`}>
                 {button.label}
              </a>
              ))}
           </div>
        </div>
        <div className='lg:block hidden'>
           <div className='h-full flex justify-between gap-4 items-center' >
               { darkMode ? 
                 <FiSun size={25} 
                //@ts-ignore
                 onClick={()=>setDarkMode((prevState) =>!prevState)}/> :<IoMoonOutline  size={25} onClick={()=>setDarkMode((prevState) =>!prevState)}/>}
                <CgProfile  size={25} className={`${darkMode ? 'text-gray-200' : 'text-gray-700' }`}/>
                <button className="rounded-full bg-gradient-to-r from-purple-400 to-blue-500
                     hover:from-purple-500 hover:to-blue-600 px-4 py-2 text-white font-semibold transition duration-300 ease-in-out">
                  Get Started
               </button>
          </div>
        </div>

        <div className='lg:hidden block'>
          <AiOutlineMenu onClick={toggleMenu}/>
          {isMenuOpen && (
            <>
         <div className={`absolute ${darkMode? 'bg-slate-900' : 'bg-white'}  z-10 h-48 p-4 w-full flex flex-col space-y-4 top-20 right-0`}>
            <div className='lg:hidden block'>
                <div className='h-full relative flex items-center '>
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <FaSearch className="text-gray-400" />
                   </div>
                    <input type="text" placeholder="Search..." className="bg-gray-700 text-white px-8  py-1 rounded-full focus:outline-none focus:ring focus:ring-blue-400" />
                     <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>
            <div className='lg:hidden block'>
           <div className="h-full flex space-x-4 items-center">
             {buttons.map(button => (
              <a key={button.id} href={button.link} className={`${ darkMode ?  "text-white" : "text-gray-900" } hover:text-gray-300 px-3 py-2 rounded-full transition-colors hover:bg-gray-700`}>
                 {button.label}
              </a>
              ))}
           </div>
            </div>
            <div className='lg:hidden block'>
               <div className='h-full flex justify-start gap-12 items-center' >
                 { darkMode ? 
                   <FiSun size={25} 
                    //@ts-ignore
                     onClick={()=>setDarkMode((prevState) =>!prevState)}/> :<IoMoonOutline  size={25} onClick={()=>setDarkMode((prevState) =>!prevState)}/>}
                    <CgProfile  size={25} className={`${darkMode ? 'text-gray-200' : 'text-gray-700' }`}/>
                     <button className="rounded-full bg-gradient-to-r from-purple-400 to-blue-500
                          hover:from-purple-500 hover:to-blue-600 px-4 py-2 text-white font-semibold transition duration-300 ease-in-out">
                      Get Started
                    </button>
               </div>
            </div>
          </div>
            </>
          )}
        </div>
    </div>
    
  )
}

export default Header