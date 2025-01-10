"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  old_price: number;
  new_price: number;
  tags: string[];
  sizes: string[];
  image: string;
  rating: number;
  stock_quantity: number;
  _id: string;
  _type: string;
}

function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter(); 

  async function uploadProducts() {
    try {
      const response = await fetch('https://677cae354496848554c73dca.mockapi.io/products/');
      const data: Product[] = await response.json();
      const uploadPromises = data.map(async (product) => {
        const response = await fetch(product.image);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const asset = await client.assets.upload('image', buffer);

        const sanityData = {
          ...product,
          image: {
            _type: 'image',
            asset: {
              _ref: asset._id,
              _type: 'reference'
            }
          },
          _id: product.id.toString(),
          _type: 'products'
        };

        return client.createOrReplace(sanityData);
      });

      await Promise.all(uploadPromises);
    } catch (error) {
      console.error('Error uploading products:', error);
    }
  }

  useEffect(() => {
    (async () => {
      await uploadProducts();
      const query = '*[_type == "products"]';
      client.fetch(query).then((data: Product[]) => {
        setProducts(data);
      });
    })();
  }, []);

  const handleProductClick = (id: string) => {
    router.push(`/product/${id}`); 
  };

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        {products.length > 0 && (
          <main className="pb-8">
            <div
              className="flex gap-4 overflow-y-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
              style={{ maxHeight: "600px" }} 
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-none snap-start relative cursor-pointer"
                  onClick={() => handleProductClick(product.id)} 
                >
                  <div className="w-[250px] h-[320px] bg-white shadow-lg rounded-lg flex flex-col items-center">
                    <div className="w-full h-[230px] flex justify-center items-center">
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        width="150"
                        height="150"
                        className="object-contain"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h2 className="font-semibold">{product.name}</h2>
                      <p className="text-gray-500 line-through">${product.old_price}</p>
                      <p className="text-red-600 font-bold">${product.new_price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        )}
      </div>
    </div>
  );
}

export default Page;
