import React from "react";
import Image from "next/image";
import logo from "../public/images/Logo.png";
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
        {/* About with Logo */}
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

        {/* Quick Links */}
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

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Contact Us</h2>
          <ul className="text-sm space-y-2">
            <li>📍 Rathnapura Road, Balangoda, Sri Lanka</li>
            <li>📞 +94 77 123 4567</li>
            <li>📧 info@meditechlab.lk</li>
            <li>🕒 Mon - Sat: 7AM - 6PM</li>
          </ul>
        </div>

        {/* Branch Network */}
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

        {/* Social Links */}
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

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Meditech Laboratory. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
