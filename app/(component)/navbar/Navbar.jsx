import React from "react";
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

export default function Navbar() {
  return (
    <header className="bg-[#0f1111] text-white">
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
              <select className="hidden sm:block w-16 lg:w-20 bg-[#e6e6e6] text-xs lg:text-sm rounded-l border-none focus:outline-none">
                <option>All</option>
                <option>Books</option>
                <option>Clothing</option>
                <option>Home</option>
                <option>Other</option>
              </select>
              <input
                placeholder="Search Amazon"
                className="w-full lg:min-w-[400px] xl:min-w-[600px] border-none focus:outline-none text-sm lg:text-base py-2 px-3"
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
          <div className="flex items-center border-2 border-transparent hover:border-white p-2">
            <TiShoppingCart className="text-2xl sm:text-3xl" />
            <span className="ml-1 text-xs sm:text-sm">Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
}
