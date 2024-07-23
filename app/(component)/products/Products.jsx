"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function GiftCardProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4 bg-gray-200">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-72 bg-[#f5f0e1] rounded-lg shadow-md overflow-hidden"
        >
          <div className="h-48 p-4 bg-white flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="p-4">
            <p className="text-xs text-gray-600 mb-1">{product.category}</p>
            <h2 className="text-sm font-semibold  w-32 mb-2 line-clamp-2">
              {product.title}
            </h2>
          </div>
          <div className="bg-red-600 text-white p-2  relative top-1 text-center">
            <span className="text-2xl font-bold">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
