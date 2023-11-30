import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const categories = [
  {
    id: 0,
    name: "Business",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 1,
    name: "Technology",
    image:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Current Events",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Personal Interest",
    image:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Clear timer on component unmount
  }, [currentIndex]); // Dependency array

  return (
    <div className='relative overflow-hidden text-center h-[250px]'>
      {/* <p className='p-4'> Topics of interest</p> */}

      {categories.map((category, index) => (
        <div
          key={category.id}
          className={` transition-opacity duration-500 ease-in-out flex  ${
            index === currentIndex ? "opacity-75" : "opacity-0"
          }`}
        >
          <div className='absolute text-white z-10'>
            <span className='absolute top-[16px] left-[32px] text-center text-4xl z-10'>
              {category.name}
            </span>
            <img
              src={category.image}
              alt='people'
              className=' opacity-50 z-1 object-fit'
            />
          </div>
        </div>
      ))}
      <div
        className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer'
        onClick={prevSlide}
      >
        <FiChevronLeft size={32} />
      </div>
      <div
        className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer'
        onClick={nextSlide}
      >
        <FiChevronRight size={32} />
      </div>
    </div>
  );
};

export default Carousel;
