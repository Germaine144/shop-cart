import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart({ setShowCart }) {
  const { cartItems, increaseQty, decreaseQty, confirmOrder } = useContext(CartContext);

  return (
    <div className="bg-black bg-opacity-75 w-full h-screen fixed left-0 top-0 z-20 flex justify-end">
      <div className="bg-white w-96 h-full p-4 relative">
        <button onClick={() => setShowCart(false)} className="absolute top-2 right-2">X</button>
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="mb-4">
                <div className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <div className="flex items-center">
                    <button onClick={() => decreaseQty(item.id)} className="px-2">-</button>
                    <span className="px-2">{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)} className="px-2">+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {cartItems.length > 0 && (
          <button 
            onClick={confirmOrder} 
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Confirm Order
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
