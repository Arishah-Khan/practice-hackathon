import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  description: string;
  old_price: number;
  new_price: number;
  tags: string[];
  sizes: string[];
  image: string;
  rating: number;
  stock_quantity: number;
}

export default async function ProductsPage() {
  let products: Product[] = [];
  try {
    products = await client.fetch(`
      *[_type == "product"]{
        _id,
        name,
        description,
        "image": image.asset->url,
        old_price,
        new_price,
        tags,
        sizes,
        rating,
        stock_quantity
      }
    `);
  } catch (error) {
    console.error("Error fetching products:", error);
    return <p>Failed to load products. Please try again later.</p>;
  }

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        {products.length > 0 ? (
          <main className="pb-8">
            <div
              className="flex gap-4 overflow-y-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
              style={{ maxHeight: "600px" }}
            >
              {products.map((product) => (
                <Link key={product._id} href={`/product/${product._id}`}>
                  <div className="flex-none snap-start relative cursor-pointer">
                    <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[320px] bg-white shadow-lg rounded-lg flex flex-col items-center">
                      <div className="w-full h-[230px] flex justify-center items-center">
                        <Image
                          src={urlFor(product.image).url()}
                          alt={product.name}
                          width={300}
                          height={300}
                          layout="intrinsic"
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
                </Link>
              ))}
            </div>
          </main>
        ) : (
          <p className="text-center text-gray-500">No products available at the moment.</p>
        )}
      </div>
    </div>
  );
}
