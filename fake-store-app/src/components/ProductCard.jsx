import React from "react";
import "../index.css";


const ProductCard = ({ product, addToCart }) => (
    <div className="bg-white shadow-md rounded-md p-4">
      <img src={product.image} alt={product.title} className="h-48 mx-auto"/>
      <h3 className="text-lg font-bold my-2">{product.title}</h3>
      <p className="text-gray-700 font-medium">${product.price}</p>
      <button onClick={() => addToCart(product)} className="mt-3 bg-blue-500 hover:bg-blue-900 text-white font-semibold px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
  

  export default ProductCard