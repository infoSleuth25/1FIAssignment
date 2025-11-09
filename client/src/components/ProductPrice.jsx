import React from "react";

const ProductPrice = ({ product, selectedVariant }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{product.productName}</h1>

      {selectedVariant ? (
        <>
          <p className="text-3xl font-semibold text-green-700 mb-1">
            ₹{selectedVariant.price}
          </p>
          <p className="text-gray-600 mb-4">
            Cashback: ₹{selectedVariant.cashback}
          </p>
        </>
      ) : (
        <p className="text-gray-500 mb-4">Select a variant to see price</p>
      )}

      <p className="text-gray-700 mb-6">
        {product.productDescription || "No description available."}
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md font-medium">
          Add to Cart
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductPrice;
