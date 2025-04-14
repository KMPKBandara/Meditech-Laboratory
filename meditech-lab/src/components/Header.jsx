import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.jpeg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="Meditech Logo"
              width={80}
              height={32}
              className="cursor-pointer"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link href="/">
              <span className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/services">
              <span className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                Services
              </span>
            </Link>
            <Link href="/tests">
              <span className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                Tests
              </span>
            </Link>
            <Link href="/network">
              <span className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                Laboratory Network
              </span>
            </Link>
            <Link href="/about">
              <span className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                About Us
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
