import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {MdDarkMode} from "react-icons/md"
const Navbar = ({toggleDarkMode , isDarkMode}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const Opportunity = "<Opprtunity Knocks/>"
    return (
        <div className={`  ${isDarkMode ? 'bg-[#054275] text-white' : 'bg-white text-black'} hello`}>
            <nav className='flex justify-around h-16 flex-wrap items-center '>
                <div className='flex justify-center items-center gap-3'>
                    {/* <img src="/Search.jpg" alt='logo' className='h-16 ml-[-50px] rounded-full' /> */}
                    <h1 className='font-bold text-xl'>{Opportunity}</h1>


                </div>
                <div className=' lg:flex hidden md:flex ' >
                    <Link to="/" className='  py-2 px-4 '>Home</Link>
                  
                    <Link to="/jobs" className='py-2 px-4'>Jobs</Link>
                    <Link to="/about" className='  py-2 px-4'>About</Link>
                    

                    <div onClick={toggleDarkMode}>


                    <MdDarkMode  />
                    </div>
                </div>
                <button
                    className='block md:hidden p-2 ml-auto'
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='h-6 w-6 text-white'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    ) : (
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='h-6 w-6 text-white'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Menu items container */}
            {isMenuOpen && (
                <div className='md:hidden lg:hidden'>
                    <Link to="/" className='block py-2 px-4 border-b border-gray-200' > Home</Link>
                    <Link to="/jobs" className='block py-2 px-4 border-b border-gray-200'>Jobs</Link>
                   
                    <Link to="/about" className='block py-2 px-4'>About</Link>
                </div>
            )}


        </div>
    );
};

export default Navbar;
