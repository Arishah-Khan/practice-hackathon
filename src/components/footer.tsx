import React from "react";
import { SiMinutemailer } from "react-icons/si";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter, CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-6 md:mb-0 max-w-screen-2xl mx-auto bg-[#000000] text-white py-10 px-5 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-4">Exclusive</h2>
          <p className="text-[16px] mb-4 font-semibold">Subscribe.</p>
          <p>Get 10% off your first order</p>
          <div className="relative mt-2 w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md text-black pr-10 bg-transparent border"
            />
            <SiMinutemailer className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <p className="text-sm mb-2 text-center md:text-left">
            111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.
          </p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm mb-2">+88015-88888-9999</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-4">Account</h2>
          <p className="text-sm mb-2"><Link href="/">My Account</Link></p>
          <p className="text-sm mb-2"><Link href="/">Login / Register</Link></p>
          <p className="text-sm mb-2"><Link href="/">Wishlist</Link></p>
          <p className="text-sm mb-2"><Link href="/">Cart</Link></p>
          <p className="text-sm"><Link href="/">Shop</Link></p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <p className="text-sm mb-2">Privacy Policy</p>
          <p className="text-sm mb-2">Terms Of Use</p>
          <p className="text-sm mb-2">FAQ</p>
          <p className="text-sm">Contact</p>
        </div>

     
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">Download App</h2>
          <p className="text-sm mb-3">Save $3 with App New User Only</p>
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
          
            <Image src="/images/qrcode.png" alt="QR Code" width={80} height={80} />
           
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <Image src="/images/google.png" alt="Google Play" width={120} height={40} />
              <Image src="/images/download.png" alt="Download" width={120} height={40} />
            </div>
          </div>
          <div className="flex items-center gap-6 justify-center">
            <FaFacebookF className="text-lg cursor-pointer hover:text-[#DB4444]" />
            <CiTwitter className="text-lg cursor-pointer hover:text-[#DB4444]" />
            <CiInstagram className="text-lg cursor-pointer hover:text-[#DB4444]" />
            <FaLinkedinIn className="text-lg cursor-pointer hover:text-[#DB4444]" />
          </div>
        </div>
      </div>

      
      <div className="mt-10 text-center">
        <p className="text-sm text-[#3d3d3d]">&copy; {new Date().getFullYear()} Arishah Khan. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;