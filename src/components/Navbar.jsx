import React from "react";
import "../index.css";

const Navbar = ({ cartCount, openCart }) => (
    <nav className="bg-blue-900 text-white p-4 flex justify-between">
      <h1 className="text-2xl">Fake Store</h1>
      <button onClick={openCart} className="relative">
        Cart
        <span className="absolute -top-2 -right-3 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {cartCount}
        </span>
      </button>
    </nav>
  );

  export default Navbar