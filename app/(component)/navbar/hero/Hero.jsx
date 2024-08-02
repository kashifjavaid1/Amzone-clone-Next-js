"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "/images/hero_image.jpg",
      alt: "Find Gifts",
    },
    {
      src: "/images/box9_image.jpg",
      alt: "Games",
    },
    {
      src: "/images/box-10_image.jpg",
      alt: "Toys",
    },
    {
      src: "/images/box11_image.jpg",
      alt: "kitchen",
    },
    {
      src: "/images/box12_image.jpg",
      alt: "books",
    },
    {
      src: "/images/box13_image.jpg",
      alt: "books",
    },
  ];
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  useEffect(() => {
    const handleNextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const timer = setTimeout(handleNextSlide, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);
  return (
    <div className="relative h-[600px]  mx-auto overflow-hidden">
      <div className="relative  w-full h-60  sm:w-full sm:h-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full sm:w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              layout="fill"
              className="object-cover "
            />
          </div>
        ))}
        <div className=" sm:absolute inset-0 flex  justify-between px-4">
          <button
            onClick={prevSlide}
            className="bg-opacity-50 text-black sm:hidden md:block  p-3 rounded-full flex items-center justify-center"
          >
            <FaLessThan size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-opacity-50    sm:hidden md:block text-black p-3 rounded-full  items-center justify-center"
          >
            <FaGreaterThan size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
