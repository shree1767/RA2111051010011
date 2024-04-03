import React, { useState, useEffect } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import products from "./sampleproducts";
import { IoMdArrowBack } from "react-icons/io";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
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
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-white p-4 h-screen">
    <button onClick={goBack}><IoMdArrowBack size={30}/></button>
    <div className=" h-[55vh] flex flex-col justify-center items-center sm:flex-row sm:justify-around sm:items-center px-10">
    <div className="bg-white w-full sm:w-1/3 p-4 flex justify-center items-center sm:items-start sm:justify-start">
      <img
        src={product.image}
        alt={product.productName}
        className="w-full mb-4"
      />
    </div>
    <div className="w-full sm:w-1/3 flex flex-col justify-start items-start">
      <h1 className="md:text-3xl text-xl text-gray-800 font-bold mb-8">
        {product.productName}
      </h1>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
        <p className="text-md text-black font-bold">
        ₹{product.price} <span className="text-sm">MRP</span>
        </p>
        <p className="text-sm text-black font-bold">
          ({product.discount}% off)
        </p>
      </div>
    </div>
  </div>
  </div>
  );
};

export default ProductPage;
