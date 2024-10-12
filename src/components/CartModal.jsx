import React from "react";
import "../index.css";

const CartModal = ({ cartItems, removeFromCart, closeCart }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-96 p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <p>{item.title}</p>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 font-medium">Remove</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={closeCart} className="mt-4 bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );

  export default CartModal