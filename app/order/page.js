"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Your Shopping Cart
      </h1>

      {cart.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="py-4 px-6 text-left border-b">Image</th>
                <th className="py-4 px-6 text-left border-b">Name</th>
                <th className="py-4 px-6 text-left border-b">Price</th>
                <th className="py-4 px-6 text-left border-b">Quantity</th>
                <th className="py-4 px-6 text-left border-b">Total</th>
                <th className="py-4 px-6 text-left border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  <td className="py-4 px-6 border-b">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="object-cover rounded-lg shadow-sm"
                    />
                  </td>
                  <td className="py-4 px-6 border-b font-medium text-gray-700">
                    {item.title}
                  </td>
                  <td className="py-4 px-6 border-b text-gray-600">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="py-4 px-6 border-b text-gray-600">
                    {item.quantity}
                  </td>
                  <td className="py-4 px-6 border-b text-gray-600">
                    ${item.totalPrice.toFixed(2)}
                  </td>
                  <td className="py-4 px-6 border-b">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-600 text-lg">
          <p>Your cart is empty.</p>
          <Link href={"/"}>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out mt-4">
              Add Products
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
