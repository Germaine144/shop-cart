import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

function ProductCard({ img, name, price, paragraphy }) {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart({ id: name, name, price, img });
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <img src={img} alt={name} className="w-full h-40 object-cover rounded-md mb-3" />
      <div className="text-orange-400 flex gap-1 text-[20px]">
        <IoIosStarOutline />
          <IoStarHalfOutline />
          <IoMdStar />
          <IoStar />
        </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-gray-600">{paragraphy}</p>
      <p className="font-semibold text-orange-500">{price}</p>
      <button 
        onClick={handleAdd}
        className="mt-3 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded transition" >
         <MdOutlineAddShoppingCart />
      </button>
    </div>
  );
}

export default ProductCard;

