import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  { src: "/images/catogory1.jpg", alt: "College category", label: "College" },
  { src: "/images/home.jpg", alt: "Home category", label: "Home" },
  { src: "/images/gerden.jpg", alt: "Garden category", label: "Garden" },
  { src: "/images/games.jpg", alt: "Games category", label: "Games" },
  { src: "/images/kitchen.jpg", alt: "Kitchen category", label: "Kitchen" },
  { src: "/images/apple.webp", alt: "Apple", label: "mobile" },
  { src: "/images/grocery.webp", alt: "grocery", label: "Grocery" },
  { src: "/images/beauty.webp", alt: "grocery", label: "Beauty" },
  { src: "/images/clearance.webp", alt: "grocery", label: "Clearance" },
  { src: "/images/HouseholdEssentials.webp", alt: "grocery", label: "Tide" },
];

export default function Categories() {
  return (
    <div className="flex flex-col mx-10 items-center relative bottom-48 sm:bottom-0 p-10 bg-gray-800">
      <h1 className="text-md sm:text-3xl text-white font-bold mb-4">
        Featured categories
      </h1>
      <Link href={"#"} className="text-sm sm:text-base text-white mb-2">
        Shop all
      </Link>
      <div className="w-full  flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 items-center">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={category.src}
              alt={category.alt}
              width={150}
              height={200}
              className="p-2 rounded-full w-full"
            />
            <h1 className="mt-2 text-white font-bold text-sm sm:text-base">
              {category.label}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
