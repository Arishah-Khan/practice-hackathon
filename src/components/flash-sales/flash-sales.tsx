// "use client";

// import { useRef } from "react";
// import Div from "../heading";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import ProductsPage from "./product";


// export default function FlashSales() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const handleScroll = (direction: "forward" | "backward") => {
//     if (scrollRef.current) {
//       const scrollAmount = scrollRef.current.children[0].clientWidth;
//       scrollRef.current.scrollBy({
//         left: direction === "forward" ? scrollAmount : -scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <main className="pb-8">
//       <Div text="Today's" />

//       <section className="mb-6 flex items-center justify-center sm:justify-between sm:mx-3">
//         <div className="flex justify-center items-center gap-6 sm:gap-12">
//           <h2 className="text-lg sm:text-xl md:text-2xl font-medium">Flash Sales</h2>
//           <div className="flex justify-start items-center gap-2 sm:gap-3 mt-2">
//             {/* Timer */}
//             {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
//     <div key={index} className="flex flex-col justify-start items-start gap-1 sm:gap-2 text-black">
//       <p className="font-semibold text-xs sm:text-sm">{label}</p>
//       <div className="flex items-center text-sm sm:text-base gap-1">
//         <h2>{label === "Days" ? "03" : label === "Hours" ? "23" : "19"}</h2>
//         {index < 3 && (
//           <span className="text-[#db4444] font-bold">:</span> 
//         )}
//       </div>
//     </div>
//   ))}
            
//           </div>
//         </div>
//         <div className="flex gap-4 pl-3">
//           <button
//             onClick={() => handleScroll("backward")}
//             className="bg-gray-200 hover:bg-gray-300 px-1 py-1 sm:px-2 sm:py-2 rounded-full"
//           >
//             <FaArrowLeft size={16} /> {/* Left Arrow Icon */}
//           </button>
//           <button
//             onClick={() => handleScroll("forward")}
//             className="bg-gray-200 hover:bg-gray-300  px-1 py-1 sm:px-2 sm:py-2 rounded-full"
//           >
//             <FaArrowRight size={16} /> {/* Right Arrow Icon */}
//           </button>
//         </div>
//       </section>

//       {/* Cards Section */}
//       <div
//         ref={scrollRef}
//         className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
//       >
//         <ProductsPage/>
//       </div>
//     </main>
//   );
// }





import Div from "../heading";
import ProductsPage from "./product";

export default function FlashSales() {
  

  return (
    <main className="pb-8">
      <Div text="Today's" />

      <section className="mb-6 flex items-center justify-center sm:justify-between sm:mx-3">
        <div className="flex justify-center items-center gap-6 sm:gap-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium">
            Flash Sales
          </h2>
          <div className="flex justify-start items-center gap-2 sm:gap-3 mt-2">
            {/* Timer */}
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-start gap-1 sm:gap-2 text-black"
              >
                <p className="font-semibold text-xs sm:text-sm">{label}</p>
                <div className="flex items-center text-sm sm:text-base gap-1">
                  <h2>
                    {label === "Days" ? "03" : label === "Hours" ? "23" : "19"}
                  </h2>
                  {index < 3 && (
                    <span className="text-[#db4444] font-bold">:</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
     
      </section>

      <div>
        <ProductsPage />
      </div>
    </main>
  );
}
