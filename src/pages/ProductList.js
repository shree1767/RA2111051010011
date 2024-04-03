import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Link } from "react-router-dom";
import products from "./sampleproducts";

const options = [
  "Customer Rating",
  "Price: High to Low",
  "Price: Low to High",
  "Discount",
];

const ProductList = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDropdownChange = (option) => {
    setSelectedOption(option.value);
    // Implement sorting logic based on the selected option
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white p-4 h-full flex flex-col justify-center items-around px-[10vw] py-[5vw]">
      <div className="md:flex md:justify-between md:items-center">
        <div className="md:text-3xl text-2xl text-left text-gray-800 font-bold mb-8">
          Product Results
        </div>
        <div className="md:flex justify-end items-center gap-2 md:space-y-0 space-y-5 mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="md:w-1/2 w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500 transition"
          />
          <Dropdown
            options={options}
            onChange={handleDropdownChange}
            value={selectedOption}
            placeholder="Sort By"
            className="md:w-[18vw] xl:w-[13vw] text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div
              key={product.id}
              className="hover:bg-white hover:shadow-xl transition duration:300 p-4 h-full"
            >
              <div className="h-[28vh] flex items-center">
                <img
                  src={product.image}
                  alt={product.productName}
                  className="w-full"
                />
              </div>

              <div className="text-gray-800 space-y-2">
                <h3 className="text-lg font-semibold mb-2">
                  {product.productName}
                </h3>
                <p className="text-sm text-gray-600">
                  Rating: {product.rating}
                </p>
                <div className="flex justify-between">
                  <p className="text-md text-black font-bold ">
                    {" "}
                    ₹ {product.price} <span className="text-[10px]">M.R.P</span>
                  </p>
                  <p className="text-sm text-black">
                    {" "}
                    ({product.discount}% off)
                  </p>
                </div>

                <p className="text-sm text-gray-800">
                  Availability: {product.availability}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
