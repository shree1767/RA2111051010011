import React, { useState, useEffect } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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
  }
];

const options = [
  "Category",
  "E-commerce Company",
  "Rating",
  "Price Range",
  "Availability"
];

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDropdownChange = (option) => {
    setSelectedOption(option.value);
  };

  useEffect(() => {
    // fetchData(setProducts, setError, setLoading);
  }, []);

  return (
    <div className="product-list p-4">
      <h1 className="bg-red text-white text-center py-2">Product List</h1>
      <div className="my-4">
        <Dropdown
          options={options}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="Select an option"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="product-card border border-gray-300 rounded p-4">
            <img src={product.image} alt={product.productName} className="w-full mb-4" />
            <div className="product-info">
              <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600">Rating: {product.rating}</p>
              <p className="text-gray-600">Discount: {product.discount}%</p>
              <p className="text-gray-600">Availability: {product.availability}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
