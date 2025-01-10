import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface Category {
  name: string;
  href: string;
}

interface CategoryProps {
  className?: string;
}

const categories: Category[] = [
  { name: "Woman’s Fashion", href: "#woman’sFashion" },
  { name: "Men’s Fashion", href: "#men’sFashion" },
  { name: "Electronics", href: "#electronics" },
  { name: "Home & Lifestyle", href: "#home&Lifestyle" },
  { name: "Medicine", href: "#medicine" },
  { name: "Sports & Outdoors", href: "#sports-outdoors" },
  { name: "Baby’s & Toys", href: "#baby’s-Toys" },
  { name: "Groceries & Pets", href: "#groceries-Pets" },
  { name: "Health & Beauty", href: "#health-Beauty" },
];

export default function  Category({ className }: CategoryProps) {
  return (
    <section
    className={`w-full md:w-1/3 lg:pl-4 md:border-r-2 md:pt-10 md:border-gray-100 flex justify-center items-center ${
      className || ""
    }`}
  >
  
      {/* Left Sidebar for Categories */}
      <div className="bg-white  md:px-3 py-3 md:pb-3 w-full flex justify-center items-center">
        <ul className="space-y-2 md:space-y-0 lg:space-y-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className=" pr-4 pl-2 sm:pl-8 md:pl-0" // Right border added
            >
              <Link
                href={category.href}
                className="text-md pt-3 lg:pt-4 text-black hover:underline  flex justify-start  md:justify-between items-center w-full"
              >
                {category.name}

                {index < 2 && <FaChevronRight className="ml-6" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
