import React from "react";
import Carousel from "../ui/Carousel";

const TopicLibrary = () => {
  return (
    <section className=' bg-midGreen text-white text-center items-center justify-between'>
      <div className='md:flex max-w-[1080px] mx-auto'>
        <div className='md:w-1/2 h-full'>
          <Carousel />
        </div>
        <div className='p-4 md:w-1/2'>
          <h2 className='text-2xl md:text-5xl font-extralight'>
            Browse Topics of interest
          </h2>
          <p>
            Networking events for computer and technology professionals are
            great opportunities for sharing ideas, learning about new
            developments, and building professional relationships. Here are some
            topics that can help spark engaging conversations:
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopicLibrary;
