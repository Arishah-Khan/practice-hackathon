import React from "react";
import CategoryCard from "./cat-card";
import Div from "./heading";

const CategorySec = () => {
  // Example data for cards
  const cards = [
    { image: "/images/cellphone.png", title: "Phones" },
    { image: "/images/computer.png", title: "Computers" },
    { image: "/images/smart.png", title: "SmartWatch" },
    { image: "/images/camera1.png", title: "Camera" },
    { image: "/images/head.png", title: "HeadPhones" },
    { image: "/images/gam.png", title: "Gaming" },
  ];

  return (
    <div className=" px-4 sm:px-8 py-4 border-b-2 border-gray-200 ">
      <Div text="Categories" />
      <h1 className="font-thin text-xl">Browse By Category</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-8">
        {cards.map((card, index) => (
          <CategoryCard
            key={index}
            image={card.image}
            imageAlt={card.title}
            title={card.title}
            cardClass={card.title === "Camera" ? "bg-[#DB4444]" : ""} // Conditionally adding bg-red-500 for Camera
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySec;
