import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

function ProductCard({ img, name, price, count, paragraphy }) {
  return (
    <div className="border border-gray-300 hover:border-gray-400 hover:scale-105 transition-transform duration-200 rounded-md overflow-hidden">
      <img src={img} alt={name} className="w-full h-48 object-cover" />

      <div className="p-4 space-y-2 relative">
       
        <div className="text-orange-400 flex gap-1 text-[20px]">
        <IoIosStarOutline />
          <IoStarHalfOutline />
          <IoMdStar />
          <IoStar />
        </div>

        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">{paragraphy}</p>
        <p className="text-xl font-bold text-orange-500">{price}</p>

        <button className="absolute top-4 right-4 bg-orange-400 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 transition-colors">
          <MdOutlineAddShoppingCart />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
