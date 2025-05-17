'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const branches = [
  {
    location: "Balangoda",
    description:
      "Located in the heart of Balangoda, offering comprehensive diagnostic services.",
    image: "/images/balangoda.jpg",
  },
  {
    location: "Rathnapura",
    description:
      "Serving Rathnapura with advanced diagnostic testing and patient care.",
    image: "/images/rathnapura.jpg",
  },
  {
    location: "Welimada",
    description:
      "Conveniently located in Welimada, offering quality diagnostic services.",
    image: "/images/welimada.jpg",
  },
  {
    location: "Kalawana",
    description:
      "Providing exceptional laboratory services to the Kalawana region.",
    image: "/images/kalawana.jpg",
  },
];

const directors = [
  {
    name: "Dr. Nimal Perera",
    role: "Managing Director",
    image: "/images/director1.jpg",
  },
  {
    name: "Dr. Kumari Silva",
    role: "Operations Director",
    image: "/images/director2.jpg",
  },
  {
    name: "Mr. Saman Weerasinghe",
    role: "Finance Director",
    image: "/images/director3.jpg",
  },
];

const backgroundPhotos = [
  "./public/images/aboutus-backgroud-1.jpg",
  "./public/images/aboutus-backgroud-2.jpg",
  "./public/images/aboutus-backgroud-3.jpg",
]

const AboutUs = () => {
  return (
    <div className="bg-white text-center">

      {/* Background Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3000 }}
        loop
        effect="fade"
        className="w-full h-[400px] mb-10"
      >
        {backgroundPhotos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
              src={photo}
              alt={`Background ${index + 1}`}
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* About Us Section */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-blue-800 mb-8">About Us</h2>
        <p className="text-gray-700 text-lg mb-4 max-w-3xl mx-auto">
        

          MediTech Laboratory is a leading diagnostic center in Sri Lanka, offering advanced routine and specialized tests. ISO-certified and aligned with global research standards, we ensure accurate, timely, and reliable results. Our expert team uses cutting-edge technology to support informed healthcare decisions. At MediTech, we are committed to precision, innovation, and your well-being.

        </p>
        

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 max-w-5xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide accurate, timely, and accessible diagnostic services that enhance patient care and health outcomes across Sri Lanka.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted and innovative diagnostic laboratory in the region, committed to excellence and continuous improvement.
            </p>
          </div>
        </div>

        {/* Director Board Carousel */}
        <h3 className="text-3xl font-semibold text-blue-800 mb-6">Director Board</h3>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-16"
        >
          {directors.map((director, index) => (
            <SwiperSlide key={index}>
              <div className="bg-blue-50 p-6 rounded-2xl shadow-lg mx-4 hover:shadow-xl transition">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-blue-700 mb-1">{director.name}</h4>
                <p className="text-gray-600">{director.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Branch Carousel */}
        <h3 className="text-3xl font-semibold text-blue-800 mb-6">Our Branches</h3>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {branches.map((branch, index) => (
            <SwiperSlide key={index}>
              <div className="bg-blue-50 rounded-2xl shadow-lg p-6 mx-2 transition hover:shadow-xl">
                <img
                  src={branch.image}
                  alt={branch.location}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-blue-700 mb-2">{branch.location}</h4>
                <p className="text-gray-600 text-sm">{branch.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Social Media */}
      <section className="bg-blue-50 py-12">
        <h3 className="text-2xl font-semibold text-blue-800 mb-6">Follow Us</h3>
        <div className="flex justify-center space-x-8">
          <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF size={28} /></a>
          <a href="#" className="text-sky-400 hover:text-sky-600"><FaTwitter size={28} /></a>
          <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram size={28} /></a>
          <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedinIn size={28} /></a>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-blue-800 mb-8">Contact Us</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows="5"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
