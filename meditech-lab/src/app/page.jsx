// app/page.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Top Banner with Social Media */}
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

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Why Choose MediTech Laboratory?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <ul className="list-disc list-inside space-y-3">
            <li>
              State-of-the-art laboratory service—gold standard diagnostics in
              Sri Lanka.
            </li>
            <li>The most complete menu of tests available locally.</li>
            <li>Multiple locations for easy accessibility.</li>
            <li>
              ISO certified; external quality control in collaboration with
              international labs.
            </li>
            <li>
              Recognized by WHO & other international research organizations.
            </li>
          </ul>
          <div>
            <Image
              src="https://tse1.mm.bing.net/th?id=OIP.bRlCnFZtAKn3gMT5KUSA-wHaE8&pid=Api"
              alt="Why Choose Us"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Routine Testing</h3>
              <p className="text-gray-600">
                Blood, urine, and clinical samples
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">
                Specialized Diagnostics
              </h3>
              <p className="text-gray-600">Hormones, allergy, cancer markers</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">
                Home Sample Collection
              </h3>
              <p className="text-gray-600">We visit your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Network Overview */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Our Laboratory Network
          </h2>
          <p className="text-gray-600 mb-8">
            Connecting patients with quality care island wide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-800 font-semibold">
            <div>
              <p className="text-4xl">04</p>
              <p>Main Branches</p>
            </div>
            <div>
              <p className="text-4xl">30+</p>
              <p>Collection Centers</p>
            </div>
            <div>
              <p className="text-4xl">100+</p>
              <p>Island-wide Access</p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/network">
              <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                View Laboratory Network
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Our Facilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">
                Automated Analyzers
              </h3>
              <p className="text-gray-600">
                State-of-the-art equipment for accurate and fast results.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">
                24/7 Sample Handling
              </h3>
              <p className="text-gray-600">
                Round-the-clock sample reception and processing.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">
                Secure Report Delivery
              </h3>
              <p className="text-gray-600">
                Digital reports via SMS, email, and our secure portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            What Our Patients Say
          </h2>
          <div className="space-y-6">
            <blockquote className="bg-white p-6 rounded-lg shadow text-left">
              <p className="text-gray-700 italic">
                "Professional, clean, and quick service. Got my results faster
                than expected. Highly recommended!"
              </p>
              <footer className="mt-4 text-blue-800 font-semibold">
                - Nimal Perera
              </footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow text-left">
              <p className="text-gray-700 italic">
                "Friendly staff and reliable testing. I always visit MediTech
                for my regular checkups."
              </p>
              <footer className="mt-4 text-blue-800 font-semibold">
                - Kumari Silva
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
