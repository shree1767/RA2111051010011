import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "./sampleproducts";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log(id);
  useEffect(() => {
    const productId = parseInt(id);
    const foundProduct = products.find((product) => product.id === productId);

    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-4 h-screen flex justify-around items-center px-10">
      <div className="bg-white w-1/3  p-4">
        <img
          src={product.image}
          alt={product.productName}
          className="w-full mb-4"
        />
      </div>
      <div className="w-1/3">
        <h1 className="md:text-3xl text-xl text-gray-800 font-bold mb-8">
          {product.productName}
        </h1>
        <div className="flex gap-4 ">
          <p className="text-md text-black font-bold ">
            {product.price} <span className="text-[10px]">M.R.P</span>
          </p>
          <p className="text-sm text-black font-bold">
            ({product.discount}% off)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
