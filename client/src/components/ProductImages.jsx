import React, { useState } from "react";

const ProductImages = ({ productImages = [] }) => {
  const [mainImage, setMainImage] = useState(
    productImages[0]?.url || "https://via.placeholder.com/400x400"
  );

  return (
    <div>
      {/* Main Image */}
      <div className="w-full aspect-square bg-gray-100 rounded-xl flex justify-center items-center overflow-hidden">
        <img
          src={mainImage}
          alt="Product"
          className="object-contain w-full h-full transition-all duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 justify-center flex-wrap">
        {productImages.map((img, idx) => (
          <img
            key={idx}
            src={img.url}
            alt={`thumb-${idx}`}
            onClick={() => setMainImage(img.url)}
            className={`w-20 h-20 rounded-md border cursor-pointer object-contain transition-all 
              ${
                mainImage === img.url
                  ? "border-blue-500 scale-105"
                  : "border-gray-300 hover:border-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
