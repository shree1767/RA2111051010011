import React, { useState, useEffect } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from "react-router-dom";
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
    <div className="bg-gray-100 p-4 h-screen flex flex-col justify-center items-around px-[10vw]">
      <h1 className="text-3xl text-center text-gray-800 font-bold mb-8">Product List</h1>
      <div className="flex justify-end items-center gap-2 mb-8">
        <div className="text-md">Filter</div>
        <Dropdown
          options={options}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="Select an option"
          className="w-50"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
          <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.productName} className="w-full mb-4" />
            <div className="text-gray-800">
              <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
              <p className="text-sm text-gray-600">Rating: {product.rating}</p>
              <div className="flex justify-between ">
                <p className="text-sm text-black font-bold "> {product.price} <span className="text-[10px]">M.R.P</span></p>
                <p className="text-sm text-black"> ({product.discount}% off)</p>
              </div>

              <p className="text-sm text-gray-600">Availability: {product.availability}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
