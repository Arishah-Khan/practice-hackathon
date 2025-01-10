import React from "react";
import Image from "next/image";

interface CategoryCardProps {
  image: string;
  imageAlt: string;
  title: string;
  cardClass?: string; // Optional cardClass prop
}

const CategoryCard = ({ image, title, cardClass }: CategoryCardProps) => {
  return (
    <div className={`w-[130px] h-[100px] sm:w-[170px] sm:h-[145px] flex flex-col items-center justify-center border-[1px] rounded-lg shadow-md p-2 hover:bg-[#DB4444] ${cardClass}`}>
      {/* Image */}
      <div className="w-[56px] h-[56px] mb-2">
        <Image src={image} alt={title} width={56} height={56} />
      </div>

      <p className="text-sm font-medium text-center">{title}</p>
    </div>
  );
};

export default CategoryCard;
