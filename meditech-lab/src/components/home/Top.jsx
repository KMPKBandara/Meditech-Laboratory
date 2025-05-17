import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Top = () => {
  return (
    <div className="relative">
      <div className="absolute top-4 right-4 flex space-x-4 z-10 text-white">
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

      {/* Single Image Section */}
      <div className="w-full h-[400px] overflow-hidden">
        <Image
          src="https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg" // Assuming the image is stored in the public/images folder
          alt="Laboratory"
          width={1600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Top;
