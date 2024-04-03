import React, { useState, useEffect } from "react";

const products = [
    {
      "productName": "Laptop 1",
      "price": 2236,
      "rating": 4.7,
      "discount": 63,
      "availability": "yes"
    },
    {
      "productName": "Laptop 2",
      "price": 1899,
      "rating": 4.5,
      "discount": 50,
      "availability": "yes"
    },
    {
      "productName": "Laptop 3",
      "price": 2799,
      "rating": 4.9,
      "discount": 70,
      "availability": "no"
    }
  ]
  
const ProductList = () => {
    // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (setProducts, setError, setLoading) => {
    try {
      const response = await fetch("API_URL/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
    //   setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    // fetchData(setProducts, setError, setLoading);
  }, []);
  
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}</p>
            <p>Availability: {product.availability}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
