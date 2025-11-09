import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ProductImages from "./ProductImages";
import ProductOptions from "./ProductOptions";
import ProductPrice from "./ProductPrice";
import ProductEMI from "./ProductEMI";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/products/${id}`);
        const data = res.data.product;
        setProduct(data);

        if (data?.productDetails?.length > 0) {
          setSelectedColor(data.productDetails[0].color);
          setSelectedStorage(data.productDetails[0].storage);
          setSelectedVariant(data.productDetails[0]);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product && selectedColor && selectedStorage) {
      const variant = product.productDetails.find(
        (d) => d.color === selectedColor && d.storage === Number(selectedStorage)
      );
      setSelectedVariant(variant || null);
    }
  }, [selectedColor, selectedStorage, product]);

  if (!product)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-gray-600 text-lg">Loading product...</p>
      </div>
    );

  const colors = [...new Set(product.productDetails.map((d) => d.color))];
  const storages = [
    ...new Set(
      product.productDetails
        .filter((d) => d.color === selectedColor)
        .map((d) => d.storage)
    ),
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT SIDE */}
      <div>
        <ProductImages productImages={product.productImages} />
        <ProductOptions
          colors={colors}
          storages={storages}
          selectedColor={selectedColor}
          selectedStorage={selectedStorage}
          setSelectedColor={setSelectedColor}
          setSelectedStorage={setSelectedStorage}
        />
      </div>

      {/* RIGHT SIDE */}
      <div>
        <ProductPrice product={product} selectedVariant={selectedVariant} />
        {/* ✅ Pass selectedVariant here */}
        <ProductEMI selectedVariant={selectedVariant} />
      </div>
    </div>
  );
};

export default ProductDetails;
