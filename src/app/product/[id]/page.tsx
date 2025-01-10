import AddToCart from "@/components/add-to-cart";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  old_price: string;
  new_price: string;
  tags: string[];
  sizes: string[];
  image: string;
  rating: number;
  stock_quantity: number;
  _id: string;
  _type: string;
}

async function fetchProduct(id: string) {
  const query = `*[_type == "products" && (id == $id || _id == $id)]{
    id,
    name,
    description,
    old_price,
    new_price,
    tags,
    sizes,
    image,
    rating,
    stock_quantity,
    _id,
    _type
  }`;
  const data = await client.fetch(query, { id });
  return data[0]; // Return the first matching product
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProduct(id); // Fetch the product details based on the dynamic id

  if (!product) {
    return <p>Loading...</p>; // or display a 404 page
  }

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center p-6">
      <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl mb-4">{product.name}</h2>

        <div className="mt-2 mb-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1">
            <div>
              {Array.from({ length: product.rating }).map((_, index) => (
                <span key={index} className="text-yellow-500">
                  ★
                </span>
              ))}
                            <span className="text-[#bfbfbf]">★</span>

            </div>

            <div>
              {" "}
              <span className="text-[#bfbfbf]">(150 Reviews)</span>
            </div>
            <div>
              {product.stock_quantity > 0 && (
                <span className="text-green-500 ml-4">In Stock</span>
              )}
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div className="flex gap-2">
          <p className="text-red-600 font-bold text-xl mb-2">
            ${product.new_price}
          </p>
          <p className="text-gray-500 line-through text-lg">
            ${product.old_price}
          </p>
        </div>

        <p className="text-gray-700 mb-4 max-w-[400px]">
          {product.description}
        </p>

        {/* Tags Section */}
        <div className="my-2">
          <p className="font-semibold">Tags:</p>
          <ul className="flex flex-wrap gap-2">
            {product.tags.map((tag: string) => (
              <li key={tag} className="text-sm text-gray-500">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Available Sizes Section */}
        <div className="mt-4 mb-4">
          <p className="font-semibold">Available Sizes:</p>
          <ul className="flex flex-wrap gap-2">
            {product.sizes.map((size: string) => (
              <li key={size} className="text-sm text-gray-500">
                {size}
              </li>
            ))}
          </ul>
        </div>

        <AddToCart
          key={product._id}
          id={product.id}
          currency="PLN"
          description={product.description}
          image={product.image}
          name={product.name}
          new_price={product.new_price}
          old_price={product.old_price}
          price_id={product.price_id}
        />
      </div>
    </div>
  );
}
