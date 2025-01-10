import Link from "next/link";

const Language = () => {
  return (
    <div className="flex items-center justify-center md:justify-between p-2 flex-wrap text-white bg-black">
      {/* Text Section */}
      <div className="lg:flex-1 text-center">
        <p className="text-xs sm:text-sm md:text-base">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link href="#" className=" font-bold underline pl-2">
            Shop Now
          </Link>
        </p>
      </div>

      {/* Language Dropdown */}
      <div className="relative pr-8 hidden md:flex">
        <select className="p-1 bg-black text-white rounded-md text-xs sm:text-sm md:text-base focus:outline-none">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Italian</option>
          <option>Japanese</option>
        </select>
      </div>
    </div>
  );
};

export default Language;
