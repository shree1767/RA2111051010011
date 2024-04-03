import React, { useState, useEffect } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from "react-router-dom";
import products from './sampleproducts'


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
    <div className="bg-gray-100 p-4 h-full flex flex-col justify-center items-around px-[10vw] py-[5vw]">
      <div className="flex justify-between items-center" >
      <div className="text-3xl text-left text-gray-800 font-bold mb-8">Product Results</div>
      <div className="flex justify-end items-center gap-2 mb-8">
        <div className="text-md">Sort By</div>
        <Dropdown
          options={options}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="Select an option"
          className="w-50"
        />
      </div>
      </div>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
          <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.productName} className="w-full mb-4" />
            <div className="text-gray-800 space-y-2">
              <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
              <p className="text-sm text-gray-600">Rating: {product.rating}</p>
              <div className="flex justify-between ">
                <p className="text-md text-black font-bold "> {product.price} <span className="text-[10px]">M.R.P</span></p>
                <p className="text-sm text-black"> ({product.discount}% off)</p>
              </div>

              <p className="text-sm text-gray-800">Availability: {product.availability}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
