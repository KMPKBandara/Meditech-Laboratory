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
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1F1VQGzAWT/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://whatsapp.com/channel/0029Vb6N0fa3GJOvjfwpI421"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
                  <path d="M16.001 2.001a13.953 13.953 0 0 0-12.294 20.773L2.04 29.96l7.464-1.628a13.953 13.953 0 1 0 6.497-26.331zm7.917 19.694c-.33.928-1.919 1.823-2.652 1.941-.675.112-1.517.158-2.443-.156-.563-.185-1.285-.42-2.214-.823-3.896-1.695-6.44-5.548-6.635-5.799-.194-.253-1.59-2.113-1.59-4.03s1.008-2.859 1.366-3.246c.358-.386.779-.483 1.039-.483.261 0 .52.003.747.014.24.012.561-.09.877.67.33.785 1.12 2.715 1.22 2.911.098.197.164.435.032.697-.13.263-.195.426-.388.651-.194.226-.41.504-.584.677-.194.193-.397.404-.17.794.226.389 1.003 1.651 2.152 2.682 1.482 1.309 2.734 1.714 3.133 1.907.4.193.63.161.865-.097.236-.258 1.02-1.187 1.296-1.593.277-.406.525-.33.888-.193.363.135 2.303 1.086 2.702 1.284.399.197.663.293.76.455.098.162.098.937-.231 1.865z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/meditechlab01?igsh=ZW96b3M2eHV0cG82"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/meditech-lab/"
                target="_blank"
                rel="noopener noreferrer"
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
                  No:08, Kalthota Road, Balagahamula, Balangoda
                  <br />
                  Sri Lanka 70100
                </span>
              </li>
              <li className="flex items-start">
                <Phone
                  className="mr-3 text-blue-500 flex-shrink-0 mt-1"
                  size={18}
                />
                <div className="text-gray-400 space-y-1">
                  <div>
                    <span className="font-semibold text-white">Balangoda:</span>{" "}
                    <a
                      href="tel:+94452288388"
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      045 2288388
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-white">
                      Rathnapura:
                    </span>{" "}
                    <a
                      href="tel:+94552224626"
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      045 222 6446
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Welimada:</span>{" "}
                    <a
                      href="tel:+94552224018"
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      052 2245566
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Kalawana:</span>{" "}
                    <a
                      href="tel:+94572227278"
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      045 2255370
                    </a>
                  </div>
                </div>
              </li>

              <li className="flex items-center">
                <Mail className="mr-3 text-blue-500 flex-shrink-0" size={18} />
                <a
                  href="mailto:info@meditechlab.lk"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  meditechlabinfo@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Branch Network */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-white">Our Branches</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  name: "Balangoda Main Branch",
                  address: "No:08, Kalthota Road, Balagahamula, Balangoda",
                },
                {
                  name: "Rathnapura Branch",
                  address:
                    "No:344, Hospital Junction, Colombo Road, Rathnapura",
                },
                {
                  name: "Welimada Branch",
                  address: "No:789 Hill Street, Welimada",
                },
                { name: "Kalawana Branch", address: "Hospital Road, Kalawana" },
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
          <div className="flex justify-center items-center text-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © {currentYear} Meditech Laboratory. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
