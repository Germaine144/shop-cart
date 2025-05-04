import React from "react";

function CartCount({ size }) {
  return (
    <div className={`absolute bg-orange-600 text-white text-xs ${size} -right-1 -top-1 rounded-full flex items-center justify-center`}>
      0
    </div>
  );
}

export default CartCount;
