"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";

export default function GiftCardProducts() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProductsCard = (product) => {
    toast.success("Successfully Add Product!");
    setCart((prevCart) => {
      const findProduct = prevCart.find((i) => i.id === product.id);
      let newCart = [];

      if (findProduct) {
        newCart = prevCart.map((cartItem) =>
          cartItem.id === product.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                totalPrice: (cartItem.quantity + 1) * cartItem.price,
              }
            : cartItem
        );
      } else {
        newCart = [
          ...prevCart,
          { ...product, quantity: 1, totalPrice: product.price },
        ];
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

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
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center  bg-gray-200 ">
        <h1 className="py-10 text-5xl text-black">All Categories</h1>
        <Link href="/order">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Buy Order
          </button>
        </Link>
      </div>

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
              <h2 className="text-sm font-semibold w-32 mb-2 line-clamp-2">
                {product.title}
              </h2>
            </div>
            <button
              className="bg-red-600 text-white p-2 relative top-1 text-center w-full cursor-pointer hover:bg-black"
              onClick={() => addProductsCard(product)}
            >
              <div>
                <span className="text-2xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
