import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/products/allProducts", {
          withCredentials: true,
        });
        setProducts(res.data.products || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-gray-600 text-lg">Loading products...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">SIDDHESH STORE</h1>

      {products.length === 0 ? (
        <p className="text-gray-600 text-center">No products available.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
