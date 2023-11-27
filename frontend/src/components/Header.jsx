import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaRegWindowClose } from "react-icons/fa"; // Import the search icon from react-icons

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-lightGreen p-4 '>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-white text-2xl font-bold'>
          <span>Your Logo</span>
        </div>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <div className='lg:hidden'>
          <GiHamburgerMenu
            className='text-white text-3xl cursor-pointer'
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Mobile Navigation Menu (hidden on larger screens) */}
        {isMobileMenuOpen && (
          <div className='lg:hidden absolute inset-0 bg-white z-50  ease-in-out duration-300'>
            <div className='container mx-auto flex items-center justify-between p-4'>
              <div className='text-midGreen text-2xl font-bold'>
                <span>Your Logo</span>
              </div>
              <FaRegWindowClose
                className='text-midGreen text-3xl cursor-pointer'
                onClick={toggleMobileMenu}
              />
            </div>

            <div className='flex flex-col items-center justify-center h-full space-y-4'>
              <a href='#' className='text-midGreen text-xl hover:text-gray-400'>
                Link 1
              </a>
              <a href='#' className='text-midGreen text-xl hover:text-gray-400'>
                Link 2
              </a>
              <a href='#' className='text-midGreen text-xl hover:text-gray-400'>
                Link 3
              </a>
              <div className='flex items-center space-x-4'>
                {/* Search Text Box with Search Icon */}
                <input
                  type='text'
                  placeholder='Search...'
                  className='bg-gray-700 text-white px-3 py-1 rounded-md w-full flex-1'
                />
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
                  <FaSearch className='text-xl' />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Navigation Links (hidden on small screens) */}
        <div className='hidden lg:flex space-x-4'>
          <a href='#' className='text-white hover:text-gray-400'>
            Link 1
          </a>
          <a href='#' className='text-white hover:text-gray-400'>
            Link 2
          </a>
          <a href='#' className='text-white hover:text-gray-400'>
            Link 3
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
