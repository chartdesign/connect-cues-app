import React from "react";

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center p-4 bg-lightGreen text-midGreen'>
      <div className='text-center md:text-left md:flex-1'>
        <h1 className='text-3xl font-bold mb-4'>Main Heading</h1>
        <p className='mb-4'>
          This is some supporting text underneath the main heading.
        </p>
      </div>
      <div className='md:flex-1'>
        <img
          src='https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt='women talking'
          className='w-full h-auto rounded-lg'
        />
      </div>
    </div>
  );
};

export default Hero;
