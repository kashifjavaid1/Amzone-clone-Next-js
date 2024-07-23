import React from "react";
import Image from "next/image";
import Link from "next/link";
export const Card = ({ title, src }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out hover:bg-blue-500 cursor-pointer">
      <span className="absolute inset-0 w-full h-full bg-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></span>
      <div className="relative p-4">
        <h2 className="relative text-xl font-bold text-gray-800 mb-2 transition-colors duration-500 group-hover:text-white group-hover:mb-4">
          {title}
        </h2>
        <div className="relative aspect-[4/3] mb-4">
          <Image
            src={src}
            alt={`Image for ${title}`}
            layout="fill"
            objectFit="cover"
            className="rounded-md transition-all duration-300 hover:scale-110"
          />
        </div>
        <Link
          href="#"
          className="relative text-sm  hover:text-orange-400  transition-colors duration-500"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
};
