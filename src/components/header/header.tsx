"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { GoHeart } from "react-icons/go";
import Language from "./language";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useShoppingCart } from "use-shopping-cart";
import { useRouter } from "next/navigation";
import { BiShoppingBag } from "react-icons/bi";


export default function Header() {
  const router = useRouter();

  const { cartCount = 0 } = useShoppingCart();
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // User authentication state
  const [showPopup, setShowPopup] = useState(false);  // To show/hide sign-out popup
  const [user, setUser] = useState<any>(null);  // Store user data

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "#" },
    { label: "About", href: "#" },
    { label: "Sign Up", href: "#" },
  ];

  

  const handleCartClick = () => {
    router.push("/shopping-cart");
  };


  return (
    <header>
      <Language />
      <section className="hidden md:flex items-center justify-between px-2 sm:px-4 lg:px-8 py-3 relative z-30 bg-white shadow-md">
        <h1 className="text-xl sm:text-2xl font-semibold">Exclusive</h1>
        <nav className="flex space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm lg:text-md hover:text-gray-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="p-2 pl-4 pr-10 w-70 rounded-md text-black bg-[#f5f5f5] border border-gray-300 focus:ring-2 focus:ring-black"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-black" />
          </div>
          <GoHeart className="text-xl cursor-pointer hover:text-gray-400" />
          <button className="text-black" onClick={handleCartClick}>
            <BiShoppingBag size="22" />
            {cartCount >= 0 && (
              <span className="absolute top-1/4 right-6 text-xs text-white bg-[#DB4444] rounded-full w-4 h-4 flex justify-center items-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="md:hidden flex flex-col bg-white p-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Exclusive</h1>
          <GiHamburgerMenu className="text-2xl" />
        </div>

        {/* Search Bar */}
        <div className="mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="p-2 pl-4 pr-10 w-full rounded-md text-black bg-[#f5f5f5] border border-gray-300 focus:ring-2 focus:ring-black"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-black" />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 w-full bg-white flex justify-around items-center p-2 border-t border-gray-300">
          <AiFillHome className="text-3xl cursor-pointer hover:text-gray-400" />
          <GoHeart className="text-3xl cursor-pointer hover:text-gray-400" />
          <button className="text-black" onClick={handleCartClick}>
            <BiShoppingBag className="text-3xl cursor-pointer hover:text-gray-400" />
            {cartCount >= 0 && (
              <span className="absolute top-1/4 right-[15%] text-xs text-white bg-[#DB4444] rounded-full w-4 h-4 flex justify-center items-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </section>
    </header>
  );
}
