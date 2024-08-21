"use client";
import React, { useEffect, useState } from "react";
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  return (
    <header
      className={`bg-[#0f1111] text-white ${
        sticky ? "fixed top-0 left-0 w-full z-50" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div
              className="w-24 h-8 sm:w-28 sm:h-10 border-2 border-transparent hover:border-white bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/images/amazon_logo.png')",
              }}
            ></div>
          </div>

          {/* Delivery Location */}
          <div className="hidden sm:flex items-center border-2 border-transparent hover:border-white p-2">
            <IoLocationOutline className="text-lg mr-1" />
            <div>
              <p className="text-xs text-[#cccccc]">Deliver to</p>
              <p className="text-sm font-bold">Pakistan</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-auto order-3 lg:order-none mt-2 lg:mt-0 lg:flex-grow lg:mx-4">
            <div className="flex text-black rounded border-2 border-transparent hover:border-[#febd68]">
              <select className="hidden sm:block w-16 lg:w-20 bg-[#e6e6e6] text-xs lg:text-sm rounded-l border-none focus:outline-none text-center">
                <option>All</option>
                <option>Books</option>
                <option>Clothing</option>
                <option>Home</option>
                <option>Other</option>
              </select>
              <input
                placeholder="Search Amazon"
                spellCheck={false}
                className=" w-full border-none focus:outline-none text-sm lg:text-base py-2 px-3"
              />
              <div className="flex items-center justify-center w-10 lg:w-12 bg-[#febd68] rounded-r">
                <IoSearchOutline className="text-xl lg:text-2xl" />
              </div>
            </div>
          </div>

          {/* Account & List */}
          <div className="hidden md:block border-2 border-transparent hover:border-white p-2">
            <p className="text-xs">Hello, sign in</p>
            <p className="text-sm font-bold">Account & List</p>
          </div>

          {/* Returns & Orders */}
          <div className="hidden md:block border-2 border-transparent hover:border-white p-2">
            <p className="text-xs">Returns</p>
            <p className="text-sm font-bold">& Orders</p>
          </div>

          {/* Cart */}
          <Link href="/order" className="cursor-pointer">
            <div className="flex items-center border-2 border-transparent hover:border-white p-2">
              <TiShoppingCart className="text-2xl mb-2 mr-1" />
              {cart.length > 0 && (
                <div className="text-lg font-bold text-blue-600 mb-1">
                  {cart.length}
                </div>
              )}
              <span className="mt-[15px] font-bold text-sm">Cart</span>
            </div>
          </Link>
        </div>
      </div>
      {/* Menu bar */}
      <div className="flex flex-wrap bg-gray-800 p-2 px-10">
        <div className="flex items-center text-center text-white cursor-pointer border-2 border-transparent hover:border-white">
          <IoIosMenu className="text-white mr-2" />
          <p className="text-sm text-white font-bold mr-4">All</p>
        </div>
        <div className="flex space-x-1 flex-wrap">
          <h1 className="text-sm text-white font-bold px-2 cursor-pointer border-2 border-transparent hover:border-white">
            Today Deals
          </h1>
          <h1 className="text-sm text-white font-bold px-2 cursor-pointer border-2 border-transparent hover:border-white">
            Customer Service
          </h1>
          <h1 className="text-sm text-white font-bold px-2 cursor-pointer border-2 border-transparent hover:border-white">
            Registry
          </h1>
          <h1 className="text-sm text-white font-bold px-2 cursor-pointer border-2 border-transparent hover:border-white">
            Gift Cards
          </h1>
          <h1 className="text-sm text-white font-bold px-2 cursor-pointer border-2 border-transparent hover:border-white">
            Sell
          </h1>
        </div>
      </div>
    </header>
  );
}
