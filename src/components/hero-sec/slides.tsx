"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";


interface Slides {
  logo: string;
  title: string;
  offer: string;
  buttonText: string;
  image: string;
}

const slides: Slides[] = [
  {
    logo: "/images/hplogo.png", // HP Laptop logo
    title: "HP Pavilion Series",
    offer: "Special Offers Just for You",
    buttonText: "Buy Now",
    image: "/images/hp.png", // HP Laptop image
  },
  {
    logo: "/images/nikonlogo.png", // Camera logo
    title: "Premium Cameras",
    offer: "Flat 15% Off",
    buttonText: "View More",
    image: "/images/camera.png", // Camera image
  },
  {
    logo: "/images/applelogo.png", // iPhone logo
    title: "iPhone 14 Series",
    offer: "Up to 10% off Voucher",
    buttonText: "Shop Now",
    image: "/images/apple.png", // iPhone image
  },
  {
    logo: "/images/gamelogo.png", // Game logo
    title: "Gaming Gear",
    offer: "Special Prices on Gaming Accessories",
    buttonText: "Explore Now",
    image: "/images/game.png", // Game image
  },
  {
    logo: "/images/headlogo.png", // Headphones logo
    title: "Headphones",
    offer: "Save up to $50 on Headphones",
    buttonText: "Discover More",
    image: "/images/headphone.png", // Headphones image
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(2);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className=" w-full flex justify-center  items-center bg-black p-3 lg:p-6 relative mx-2 my-4 md:ml-5 md:mr-8 md:my-12">
      {/* Slider Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center">
        {/* Left Side Content */}
        <div className="p-2 lg:p-6 ml-3 text-white flex flex-col gap-3 justify-center items-center  md:items-start">
          <div className="flex justify-center items-center mb-4">
            <Image
              src={slides[currentSlide].logo}
              alt={slides[currentSlide].title}
              width={100}
              height={100} // Logo size
              className="h-[40px] w-[40px] md:w-[50px] md:h-[50px]"
            />
            <p className="ml-3">{slides[currentSlide].title}</p>
          </div>

          <h1 className="text-xl md:text-2xl lg:text-4xl text-center md:text-start font-medium mb-2 tracking-wide">
            {slides[currentSlide].offer}
          </h1>
          <div className="flex justify-center items-center ">
          <button className="bg-black gap-2 text-lg text-white px-2 py-2 border-b-2 border-white">
            {slides[currentSlide].buttonText} 
          </button>
          <IoArrowForward className="text-2xl"/>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="p-8 md:p-1">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            width={400}
            height={400}
            className="w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] mx-auto"
          />
        </div>
      </div>

      {/* Pagination Circles */}
      <div className="absolute bottom-6 flex justify-center items-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-[#db4444] border-2 border-white"
                : "bg-[#808080]"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
