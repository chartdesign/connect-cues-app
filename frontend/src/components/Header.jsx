import Sidebar from "./ui/SideBar";

const Header = () => {
  return (
    <nav className='bg-lightGreen p-4 border-b border-midGreen/25'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex'>Your Logo</div>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <div className='md:hidden'>
          <Sidebar />
        </div>

        {/* Desktop Navigation Links (hidden on small screens) */}
        <div className='hidden md:flex space-x-4 items-center'>
          <a href='#' className='text-midGreen hover:text-gray-400'>
            Link 1
          </a>
          <a href='#' className='text-midGreen hover:text-gray-400'>
            Link 2
          </a>
          <a href='#' className='text-midGreen hover:text-gray-400'>
            Link 3
          </a>
          <div className='flex font-light gap-2'>
            <button>Sign In</button>
            <button className='bg-midGreen text-lightGreen p-2 rounded-lg'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
