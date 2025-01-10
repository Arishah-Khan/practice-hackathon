"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart";
import { useState, useEffect } from "react";

export interface ProductCart {
  id: string;
  name: string;
  description: string;
  currency: string;
  image: any;
  price_id: string;
  old_price: number;
  new_price: number;
}

const AddToCart = ({
  id,
  name,
  currency,
  description,
  image,
  price_id,
  old_price,
  new_price,
}: ProductCart) => {
  const { addItem, handleCartClick, cartDetails, setItemQuantity } =
    useShoppingCart();

  // Initialize quantity from cart details or set to 1 by default
  const [currentQuantity, setCurrentQuantity] = useState(() => {
    const existingItem = cartDetails?.[id];
    return existingItem ? existingItem.quantity : 1;
  });

  const imageUrl = image ? urlFor(image).url() : "/placeholder.png";

  // Increment quantity function
  const incrementQuantity = () => {
    setCurrentQuantity((prev: number) => prev + 1);
  };

  // Decrement quantity function
  const decrementQuantity = () => {
    setCurrentQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));
  };

  // Handle add to cart logic
  const handleAddToCart = () => {
    const product = {
      name,
      id,
      quantity: currentQuantity,
      description,
      price: new_price,
      currency,
      image: imageUrl,
      sku: price_id,
    };

    const existingItem = cartDetails?.[id];

    if (existingItem) {
      const updatedQuantity = currentQuantity;
      setItemQuantity(id, updatedQuantity); 
      console.log(`Updated Quantity for ${name}:`, updatedQuantity);
    } else {
      // Add new product to the cart
      addItem(product);
      setItemQuantity(id, currentQuantity); // Ensure correct quantity
      console.log("New Product Added to Cart:", product);
    }

    // Open the cart after adding item
    handleCartClick();
  };

  // Log cart details whenever cart is updated
  useEffect(() => {
    console.log("Cart Details Updated:", cartDetails);
  }, [cartDetails]);

  return (
    <div className="flex gap-4">
      <div className="flex items-center space-x-2 border-[1px] border-black">
        <Button
          onClick={decrementQuantity}
          className="bg-gray-300 text-black hover:text-white hover:bg-[#DB4444] w-8"
        >
          -
        </Button>
        <span className="text-xl px-2">{currentQuantity}</span>
        <Button
          onClick={incrementQuantity}
          className="bg-gray-300 text-black hover:text-white w-8  hover:bg-[#DB4444]"
        >
          +
        </Button>
      </div>

      <Button
        onClick={handleAddToCart}
        className="bg-[#DB4444] text-lg text-white hover:bg-black border-[1px] border-black"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
