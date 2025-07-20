"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../public/header/mediLab.jpg";
import bgImg from "../../public/header/header-bg.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tests", href: "/tests" },
  { label: "Laboratory Network", href: "/network" },
  { label: "About Us", href: "/about" },
  //{ label: "Download Report", href: "/download-report" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 shadow-sm transition-all duration-300 ${
        scrolled ? "py-1 bg-white/95 backdrop-blur-sm" : "py-3 bg-white/85"
      }`}
      style={{
        //backgroundImage: `url(${bgImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo with better sizing */}
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-36 md:h-16 md:w-40">
              <Image
                src={logo}
                alt="Meditech Logo"
                fill
                sizes="(max-width: 768px) 144px, 160px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation with underline style */}
          <nav className="hidden md:flex space-x-5 text-base font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-2 py-2 group transition-colors duration-300 ${
                    isActive
                      ? "text-blue-700 font-semibold"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 
                    ${
                      isActive
                        ? "bg-blue-600 scale-x-100"
                        : "bg-blue-500 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Contact Button - Adding this makes the header more professional */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-2xl text-blue-700 p-1"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide in from right for better UX */}
      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              className="text-3xl text-gray-600"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <HiX />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-6 text-lg font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-3 py-2 transition-colors duration-200 ${
                    isActive
                      ? "text-blue-700 font-semibold"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact Us Button */}
          <div className="flex justify-center mt-8">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
