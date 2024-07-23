"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex-none w-32 h-32 flex items-center justify-center bg-gray-100 p-2"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
