import React from "react";
import { IoCartOutline } from "react-icons/io5";
import CartCount from "./cartCount";

function Navbar() {
  return (
    <div className="w-full bg-green shadow-md py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <h1>Logo</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-orange-600 transition">Dessert</a>
          <a href="/" className="hover:text-orange-600 transition">Snacks</a>
          <a href="/" className="hover:text-orange-600 transition">Juice</a>
        </div>
        
        {/* Cart Icon with Notification Badge */}
        <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl text-gray-700 hover:text-orange-600 cursor-pointer transition">
          <IoCartOutline />
          <CartCount size="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
