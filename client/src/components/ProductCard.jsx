import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product._id}`);
  };

  const imageUrl =
    product.productImages?.[0]?.url || "https://via.placeholder.com/300x300?text=No+Image";

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-sm 
                 hover:shadow-md hover:border-gray-300 transition-all p-4 flex flex-col items-center"
    >
      <div className="w-full aspect-square flex justify-center items-center bg-gray-50 rounded-xl overflow-hidden">
        <img
          src={imageUrl}
          alt={product.productName}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="mt-3 text-lg font-semibold text-gray-800 text-center">
        {product.productName}
      </h3>
    </div>
  );
};

export default ProductCard;
