import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart({ setShowCart }) {
  const { cartItems, increaseQty, decreaseQty, confirmOrder, removeFromCart } = useContext(CartContext);

  // 🧮 Calculate the total cart price
  const total = cartItems.reduce((acc, item) => {
    const price = Number(item.price.replace("$", ""));
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="bg-black bg-opacity-75 w-full h-screen fixed left-0 top-0 z-20 flex justify-end">
      <div className="bg-white w-96 h-full p-4 relative">
        <button onClick={() => setShowCart(false)} className="absolute top-2 right-2 text-xl font-bold">X</button>
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map(item => {
              const price = Number(item.price.replace("$", ""));
              const subtotal = price * item.quantity;

              return (
                <li key={item.id} className="mb-4 border-b pb-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.name}</span>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm"  >
                      Remove
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <button onClick={() => decreaseQty(item.id)} className="px-2">-</button>
                      <span className="px-2">{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)} className="px-2">+</button>
                    </div>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {cartItems.length > 0 && (
          <>
            <div className="mt-4 text-right font-bold">
              Total: ${total.toFixed(2)}
            </div>
            <button 
              onClick={confirmOrder} 
              className="mt-4 bg-orange-400 w-full text-white px-4 py-2 rounded"
            >
              Confirm Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
