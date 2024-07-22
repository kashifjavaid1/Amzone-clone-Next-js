import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ title, src }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <div className="relative aspect-[4/3] mb-4">
          <Image
            src={src}
            alt={`Image for ${title}`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <Link
          href="#"
          className="text-sm text-blue-600 hover:text-orange-400 hover:underline"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
};
