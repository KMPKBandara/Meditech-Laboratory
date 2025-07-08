"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

import Lab1 from "../../assets/images/home/Lab1.jpg";
import Lab2 from "../../assets/images/home/Lab2.jpg";
import Lab3 from "../../assets/images/home/Lab3.jpg";
import Lab4 from "../../assets/images/home/Lab4.png";

const images = [Lab1, Lab2, Lab3, Lab4];

const Top = () => {
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/tests?query=${encodeURIComponent(search.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full bg-black overflow-hidden">
      <div className="relative w-full h-[400px] md:h-[500px] sm:h-[350px]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-20" />

        {/* Centered Content */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 space-y-6">
          {/* Heading */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg select-none">
            MediTech Laboratory
          </h1>

          {/* Search Bar */}
          {/* Tagline */}
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium max-w-xl drop-shadow-sm">
            Trusted Diagnostics, Accurate Results...!
          </p>
        </div>

        {/* Image */}
        <Image
          key={index}
          src={images[index]}
          alt={`Lab Image ${index + 1}`}
          fill
          className="object-cover"
          priority
        />

        {/* Social Icons */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-3">
          {[
            {
              icon: FaFacebookF,
              url: "https://www.facebook.com/share/1F1VQGzAWT/",
            },
            {
              icon: FaWhatsapp,
              url: "https://whatsapp.com/channel/0029Vb6N0fa3GJOvjfwpI421",
            },
            {
              icon: FaInstagram,
              url: "https://www.instagram.com/meditechlab01?igsh=ZW96b3M2eHV0cG82",
            },
            {
              icon: FaLinkedinIn,
              url: "https://www.linkedin.com/company/meditech-lab/",
            },
          ].map(({ icon: Icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/70 hover:bg-blue-600 text-white p-3 rounded-full text-xl transition"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top;
