import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from './sampleproducts'

const ProductPage = () => {
  const [product, setProduct] = useState(null); // State to hold product details

  return (
    <div className="bg-gray-100 p-4 h-screen flex flex-col justify-center items-around px-10">
      <h1 className="md:text-3xl text-xl text-center text-gray-800 font-bold mb-8">Product Details</h1>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
        <img src={product.image} alt={product.productName} className="w-full mb-4" />
        <div className="text-gray-800">
          <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
          <p className="text-sm text-gray-600">Price: ${product.price}</p>
          <p className="text-sm text-gray-600">Rating: {product.rating}</p>
          <p className="text-sm text-gray-600">Discount: {product.discount}%</p>
          <p className="text-sm text-gray-600">Availability: {product.availability}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
