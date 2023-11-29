import React from "react";

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center p-4 bg-lightGreen text-midGreen '>
      <div className='text-center md:text-left md:flex-1'>
        <h1 className='text-5xl font-thin mb-4'>Welcome to Connect Cues</h1>
        <p className='mb-4'>
          This is the world's best conversation starter prompter.
        </p>
      </div>
      <div className='md:flex-1 relative shadow-lg shadow-midGreen rounded-lg overflow-hidden'>
        <img
          src='https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt='women talking'
          className='w-full h-auto  '
        />
        <div className='absolute bottom-0 w-full h-2/5 bg-darkGreen/90 text-lightGreen rounded-b-lg flex items-center justify-center'>
          <button className='px-4 py-1 rounded-3xl bg-darkGreen/75'>
            Explore Topics
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
