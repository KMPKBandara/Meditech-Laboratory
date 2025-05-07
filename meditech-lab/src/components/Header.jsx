"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../public/images/logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tests", href: "/tests" },
  { label: "Laboratory Network", href: "/network" },
  { label: "About Us", href: "/about" },
  { label: "Download Report", href: "/download-report" },

];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="sticky top-0 z-50 shadow-sm py-2 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/header-bg.png')",
      }}
    >
      <div className="bg-white/80">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <Image
                src={logo}
                alt="Meditech Logo"
                width={60}
                height={28}
                className="cursor-pointer object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 text-base font-semibold">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href} onClick={closeMenu}>
                    <span
                      className={`cursor-pointer px-3 py-1 rounded-md transition duration-200 ${
                        isActive
                          ? "bg-blue-600 text-white shadow"
                          : "text-gray-800 hover:text-blue-600 hover:bg-white/60"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden text-2xl text-blue-700"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg z-50 fixed inset-0 top-16 left-0 w-full h-full">
            <nav className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href} onClick={closeMenu}>
                    <span
                      className={`block px-3 py-2 rounded-md font-semibold ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
