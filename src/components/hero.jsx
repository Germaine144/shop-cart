import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function HeroPage() {
  return (
    <div className="relative pt-8 px-6 flex flex-col md:flex-row justify-center items-center gap-8">
     
      <div className="relative w-full md:w-2/3"><img  src="/7.jpg" alt="Main" className="w-full h-[400px] object-cover rounded-lg shadow" />
   
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent to-black opacity-70"></div>

  
        <div className="absolute top-10 left-5 text-left text-white space-y-3 sm:max-w-[500px]">
          <h2 className="text-3xl sm:text-4xl font-bold">100% Organic Dry Dessert</h2>
          <p className="text-gray-200 text-xl">Starting At</p>
          <div className="text-2xl font-semibold text-white">$18.5</div>
          
      
          <button className="flex items-center gap-2 text-white font-medium bg-orange-400 p-3 rounded-xl hover:bg-orange-500 transition-all">
            Buy Now <FaLongArrowAltRight />
          </button>
        </div>
      </div>

    
      <div className="w-full md:w-1/3 flex flex-col gap-6">
        <img src="/6.jpg" alt=" 1" className="w-full h-48 rounded-md object-cover shadow" />
        
        <img src="/9.jpg" alt=" 2" className="w-full h-48 rounded-md object-cover shadow" />
      </div>
    </div>
  );
}

export default HeroPage;
