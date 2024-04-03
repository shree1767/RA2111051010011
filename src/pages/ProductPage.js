import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    "id": 1,
    "productName": "Laptop 1",
    "price": 2236,
    "rating": 4.7,
    "discount": 63,
    "availability": "yes"
  },
  {
    "id": 2,
    "productName": "Laptop 2",
    "price": 1899,
    "rating": 4.5,
    "discount": 50,
    "availability": "yes"
  },
  {
    "id": 3,
    "productName": "Laptop 3",
    "price": 2799,
    "rating": 4.9,
    "discount": 70,
    "availability": "no"
  },
  {
    "id": 4,
    "productName": "Laptop 4",
    "price": 3799,
    "rating": 3.9,
    "discount": 70,
    "availability": "no"
  },
  {
    "id": 5,
    "productName": "Laptop 5",
    "price": 3799,
    "rating": 3.9,
    "discount": 70,
    "availability": "no"
  },
  {
    "id": 6,
    "productName": "Laptop 6",
    "price": 3799,
    "rating": 3.9,
    "discount": 70,
    "availability": "no"
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // State to hold product details

  useEffect(() => {
    const selectedProduct = products.find((product) => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]); 

  // Check if product is fetched or not
  if (!product) {
    return <div>Loading...</div>; // Display loading indicator while fetching data
  }

  return (
    <div className="bg-gray-100 p-4 h-screen flex flex-col justify-center items-around px-10">
      <h1 className="text-3xl text-center text-gray-800 font-bold mb-8">Product Details</h1>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
        {/* Assuming there's an image property in your product object */}
        {/* Replace product.image with your actual image property */}
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
