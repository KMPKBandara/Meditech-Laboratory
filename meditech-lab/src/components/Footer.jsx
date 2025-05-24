/*import React from "react";
import Image from "next/image";
import logo from "../../public/header/Logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        <div className="md:col-span-1">
          <Image
            src={logo}
            alt="Meditech Logo"
            width={100}
            height={40}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed">
            Meditech Laboratory is committed to providing accurate and timely
            medical testing services. Our cutting-edge technology and
            experienced staff ensure reliable diagnostics.
          </p>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/network" className="hover:text-blue-400 transition">
                Laboratory Network
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Contact Us</h2>
          <ul className="text-sm space-y-2">
            <li>📍 Rathnapura Road, Balangoda, Sri Lanka</li>
            <li>📞 +94 77 123 4567</li>
            <li>📧 info@meditechlab.lk</li>
            <li>🕒 Mon - Sat: 7AM - 6PM</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">
            Our Branches
          </h2>
          <ul className="text-sm space-y-2">
            <li>🏥 Main Branch - Balangoda</li>
            <li>🏥 Rathnapura</li>
            <li>🏥 Welimada</li>
            <li>🏥 Kalawana</li>
          </ul>
        </div>

    
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Meditech Laboratory. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;*/

import React from "react";
import Image from "next/image";
import logo from "../../public/header/Logo.png";
import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Newsletter Section */}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-6">
            <div>
              <Image
                src={logo}
                alt="Meditech Laboratory"
                width={150}
                height={60}
                className="mb-4"
              />
              <p className="text-gray-400 leading-relaxed">
                Meditech Laboratory is a premier healthcare diagnostics provider
                committed to excellence in medical testing services. Our
                state-of-the-art technology and experienced professionals ensure
                accurate, reliable, and timely diagnostics for optimal
                healthcare decisions.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-blue-400 hover:bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52863 8.31345 7.04358 7.56059C5.55854 6.80773 4.24842 5.75098 3.198 4.45893C2.82629 5.09738 2.63095 5.82315 2.632 6.56193C2.632 8.01193 3.37 9.29293 4.492 10.0429C3.82801 10.022 3.17863 9.84271 2.598 9.51993V9.57193C2.5982 10.5376 2.93153 11.4735 3.54414 12.221C4.15675 12.9684 5.00647 13.4814 5.953 13.6729C5.33661 13.84 4.69039 13.8646 4.063 13.7449C4.32987 14.5762 4.85001 15.3031 5.55059 15.824C6.25118 16.345 7.09712 16.6337 7.97 16.6499C7.10248 17.3313 6.10918 17.8349 5.04687 18.1321C3.98457 18.4293 2.87412 18.5142 1.779 18.3819C3.6907 19.6114 5.91609 20.264 8.189 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6.94 5.00002C6.94 5.53046 6.7493 6.03914 6.40923 6.42121C6.06916 6.80328 5.60723 7.00002 5.12 7.00002C4.63277 7.00002 4.17084 6.80328 3.83077 6.42121C3.4907 6.03914 3.3 5.53046 3.3 5.00002C3.3 4.46958 3.4907 3.96089 3.83077 3.57883C4.17084 3.19676 4.63277 3.00002 5.12 3.00002C5.60723 3.00002 6.06916 3.19676 6.40923 3.57883C6.7493 3.96089 6.94 4.46958 6.94 5.00002ZM7 8.48002H3.5V21H7V8.48002ZM13.32 8.48002H9.85V21H13.32V14.43C13.32 10.77 18.05 10.43 18.05 14.43V21H21.5V13.07C21.5 6.90002 14.94 7.13002 13.32 10.16L13.32 8.48002Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-white">Quick Links</h2>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Tests", href: "/tests" },
                { label: "Laboratory Network", href: "/network" },
                { label: "About Us", href: "/about" },
                { label: "Download Report", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight
                      size={16}
                      className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform duration-300"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-white">Contact Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  className="mr-3 text-blue-500 flex-shrink-0 mt-1"
                  size={18}
                />
                <span className="text-gray-400">
                  456 Rathnapura Road, Balangoda,
                  <br />
                  Sri Lanka 70000
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-blue-500 flex-shrink-0" size={18} />
                <a
                  href="tel:+94771234567"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  +94 77 123 4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-blue-500 flex-shrink-0" size={18} />
                <a
                  href="mailto:info@meditechlab.lk"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  info@meditechlab.lk
                </a>
              </li>
              <li className="flex items-start">
                <Clock
                  className="mr-3 text-blue-500 flex-shrink-0 mt-1"
                  size={18}
                />
                <div className="text-gray-400">
                  <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                  <p>Saturday: 7:00 AM - 6:00 PM</p>
                  <p>Sunday: 8:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Branch Network */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-white">Our Branches</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  name: "Main Branch - Balangoda",
                  address: "456 Rathnapura Road",
                },
                { name: "Rathnapura Branch", address: "78 Hospital Road" },
                { name: "Welimada Branch", address: "23 Main Street" },
                { name: "Kalawana Branch", address: "45 Deniyaya Road" },
              ].map((branch, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors duration-300"
                >
                  <h3 className="font-medium text-white">{branch.name}</h3>
                  <p className="text-gray-400 text-sm">{branch.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications and Accreditations */}
      <div className="container mx-auto px-4 py-6 border-t border-gray-800">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-4">
            Accreditations & Certifications
          </h3>
          <div className="flex justify-center flex-wrap gap-6">
            <div className="bg-gray-800 p-2 rounded-lg px-4">
              <p className="text-white font-bold">ISO 9001</p>
              <p className="text-xs text-gray-400">Quality Management</p>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg px-4">
              <p className="text-white font-bold">ISO 15189</p>
              <p className="text-xs text-gray-400">Medical Laboratories</p>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg px-4">
              <p className="text-white font-bold">CAP</p>
              <p className="text-xs text-gray-400">
                College of American Pathologists
              </p>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg px-4">
              <p className="text-white font-bold">SLMC</p>
              <p className="text-xs text-gray-400">Sri Lanka Medical Council</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © {currentYear} Meditech Laboratory. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-500">
              <a
                href="/privacy"
                className="hover:text-blue-400 transition-colors duration-300 mb-2 md:mb-0"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-blue-400 transition-colors duration-300 mb-2 md:mb-0"
              >
                Terms of Service
              </a>
              <a
                href="/faq"
                className="hover:text-blue-400 transition-colors duration-300 mb-2 md:mb-0"
              >
                FAQ
              </a>
              <a
                href="/sitemap"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
