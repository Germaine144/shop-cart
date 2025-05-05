
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartCount({ size }) {
  const { cartItems } = useContext(CartContext);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (totalCount === 0) return null;

  return (
    <span className={`absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center ${size || "w-4 h-4"}`}>
      {totalCount}
    </span>
  );
}

export default CartCount;
