"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../public/images/logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tests", href: "/tests" },
  { label: "Laboratory Network", href: "/network" },
  { label: "About Us", href: "/about" },
];

const Header = () => {
  const pathname = usePathname();

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

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6 text-base font-semibold">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href}>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
