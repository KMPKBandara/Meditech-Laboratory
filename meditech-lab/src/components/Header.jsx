"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../public/header/mediLab.jpg";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const [langOpen, setLangOpen] = useState(false); // dropdown state

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  const toggleLangDropdown = () => setLangOpen(!langOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    setLangOpen(false);
  };

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.tests"), href: "/tests" },
    { label: t("nav.network"), href: "/network" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.offers"), href: "/offers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[999] shadow-sm transition-all duration-300 ${scrolled ? "py-1 bg-white" : "py-3 bg-white"}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-14 w-36 md:h-16 md:w-40">
            <Image src={logo} alt="Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-5 text-base font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`relative px-2 py-2 ${pathname === link.href ? "text-blue-700 font-semibold" : "text-gray-800 hover:text-blue-600"}`}>
              {link.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform ${pathname === link.href ? "bg-blue-600 scale-x-100" : ""}`}></span>
            </Link>
          ))}
        </nav>

        {/* Right buttons */}
        <div className="hidden md:flex items-center space-x-3 relative">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={toggleLangDropdown}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-full text-sm font-medium transition-colors duration-300"
            >
              {currentLang === "en" ? "English" : "සිංහල"}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <button onClick={() => changeLanguage("en")} className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors">
                  English
                </button>
                <button onClick={() => changeLanguage("si")} className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors">
                  සිංහල
                </button>
              </div>
            )}
          </div>

          {/* Contact Button */}
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md">
            {t("nav.contact")}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={toggleMobile} className="md:hidden text-2xl text-blue-700">
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-[998] transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full justify-between p-6">
          <nav className="flex flex-col items-center space-y-6 text-lg font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMobile} className={`px-3 py-2 ${pathname === link.href ? "text-blue-700 font-semibold" : "text-gray-800 hover:text-blue-600"}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center space-y-4 mt-8">
            <button onClick={() => changeLanguage(currentLang === "en" ? "si" : "en")} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              {currentLang === "en" ? "සිංහල" : "English"}
            </button>
            <Link href="/contact" onClick={closeMobile} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md">
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;