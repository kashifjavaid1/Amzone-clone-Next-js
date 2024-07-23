import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  { src: "/images/catogory1.jpg", alt: "College category", label: "College" },
  { src: "/images/home.jpg", alt: "Home category", label: "Home" },
  { src: "/images/gerden.jpg", alt: "Garden category", label: "Garden" },
  { src: "/images/games.jpg", alt: "Games category", label: "Games" },
  { src: "/images/kitchen.jpg", alt: "Kitchen category", label: "Kitchen" },
];

export default function Categories() {
  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-[30px] text-[#333333] font-bold mb-4">
        Featured categories
      </h1>
      <Link href={"#"} className="text-[14px] text-[#333333] mb-8">
        Shop all
      </Link>
      <div className="w-full flex justify-center space-x-10 items-center">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={category.src}
              alt={category.alt}
              width={200}
              height={200}
              className="p-2 rounded-full w-full"
            />
            <h1 className="mt-2">{category.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
