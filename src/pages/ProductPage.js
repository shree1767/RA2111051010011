// ProductPage.js
import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  // Fetch product details based on id or use data from some source

  return (
    <div className="bg-gray-100 p-4 h-screen flex flex-col justify-center items-around px-10">
      <h1 className="text-3xl text-center text-gray-800 font-bold mb-8">Product Details</h1>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
        Product details
      </div>
    </div>
  );
};

export default ProductPage;
