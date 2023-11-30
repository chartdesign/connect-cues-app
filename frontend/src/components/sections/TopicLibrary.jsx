import React from "react";
import Carousel from "../ui/Carousel";
import DropdownMenu from "../ui/DropdownMenu";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/topics" },
  { label: "Settings", href: "/topics" },
  // Add more menu items here
];

const TopicLibrary = () => {
  return (
    <section className=' bg-midGreen text-white text-center items-center justify-between'>
      <div className='md:flex max-w-[1080px] mx-auto items-stretch'>
        <div className='md:w-1/2 h-full p-2'>
          <Carousel />
        </div>
        <div className='p-4 md:w-1/2'>
          <h2 className='text-2xl md:text-3xl font-extralight'>
            Browse Topics of interest
          </h2>
          <p>
            Networking events for computer and technology professionals are
            great opportunities for sharing ideas, learning about new
            developments, and building professional relationships. Here are some
            topics that can help spark engaging conversations:
          </p>
          <DropdownMenu menuItems={menuItems} />
        </div>
      </div>
    </section>
  );
};

export default TopicLibrary;
