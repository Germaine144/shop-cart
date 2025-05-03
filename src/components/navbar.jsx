import React from "react";
import { IoCart } from "react-icons/io5";

function Navbar() {
  return (
    <div className="w-full bg-green shadow-md py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
    
        <div className="text-xl font-bold text-gray-800">
          <h1>Logo</h1>
        </div>

        <div className="flex gap-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-orange-600 transition">Dessert</a>
          <a href="/" className="hover:text-orange-600 transition">Fruit</a>
          <a href="/" className="hover:text-orange-600 transition">Juice</a>
        </div>
        
        <div className="text-2xl text-gray-700 hover:text-orange-600 cursor-pointer transition">
          <IoCart />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
