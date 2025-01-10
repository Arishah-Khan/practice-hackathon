import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  id: string;
  discount: string;
  heading: string;
  price: string;
  oldPrice: string;
  image: string;
  star: string;
}

export default function Cards({
  id,
  discount,
  heading,
  price,
  oldPrice,
  image,
  star,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter(); // Initialize the router here

  const handleButtonClick = () => {
    router.push(`/product/${id}`); // Navigate to the product detail page
  };

  return (
    <section
      className="border rounded-lg w-64 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount Badge */}
      <div className="bg-[#f5f5f5] h-[200px] relative">
        <div className="absolute top-2 left-2 bg-[#db4444] text-white text-xs px-2 py-1 rounded">
          {discount}
        </div>

        {/* Card Images */}
        <div className="flex justify-end flex-col items-end gap-2 pt-2 pr-2">
          <Image
            src="/images/heart.png"
            alt="wishlist"
            width={30}
            height={30}
          />
          <Image src="/images/eye.png" alt="eye" width={30} height={30} />
        </div>

        {/* Main Card Image */}
        <div className="flex justify-center items-center absolute inset-0">
          <Image
            src={image}
            alt="card"
            width={100}
            height={100}
            className="w-[130px] max-h-[160px]"
          />
        </div>
        
        {isHovered && (
          <button
            onClick={handleButtonClick}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
          >
            Add to Cart
          </button>
        )}
      </div>

      {/* Card Details */}
      <div className="text-center flex flex-col justify-start items-start pl-2 pb-3 gap-3">
        <h4 className="text-md pt-3 font-semibold">{heading}</h4>
        <div className="flex justify-center items-center gap-2">
          <p className="text-[#db4444] font-bold">${price}</p>
          <p className="text-gray-500 line-through">${oldPrice}</p>
        </div>
        <Image src={star} alt="stars" width={100} height={20} />
      </div>
    </section>
  );
}