"use client";
import Image from "next/image";
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
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      {cart.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4 text-left border-b">Image</th>
                <th className="py-2 px-4 text-left border-b">Name</th>
                <th className="py-2 px-4 text-left border-b">Price</th>
                <th className="py-2 px-4 text-left border-b">Quantity</th>
                <th className="py-2 px-4 text-left border-b">Total</th>
                <th className="py-2 px-4 text-left border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="py-4 px-4 border-b">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="object-cover rounded"
                    />
                  </td>
                  <td className="py-4 px-4 border-b">{item.title}</td>
                  <td className="py-4 px-4 border-b">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="py-4 px-4 border-b">{item.quantity}</td>
                  <td className="py-4 px-4 border-b">
                    ${item.totalPrice.toFixed(2)}
                  </td>
                  <td className="py-4 px-4 border-b">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
}
