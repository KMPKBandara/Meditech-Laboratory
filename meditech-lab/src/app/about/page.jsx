import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* About Us Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">About Us</h2>
          <p className="text-gray-700 mb-4">
            MediTech Laboratory is a leading diagnostic center in Sri Lanka,
            offering state-of-the-art services for routine and specialized
            testing. With over 20 years of experience in the healthcare
            industry, we are committed to providing reliable and accurate test
            results.
          </p>
          <p className="text-gray-700 mb-4">
            Our laboratory is ISO certified and collaborates with international
            research organizations to ensure the highest standards of quality
            and accuracy in diagnostics.
          </p>

          {/* Director Board Section */}
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Director Board
          </h3>
          <p className="text-gray-700 mb-4">
            Our director board is composed of leading experts in the fields of
            laboratory diagnostics, healthcare, and research. With their
            extensive experience, they guide MediTech Laboratory towards
            excellence in patient care and innovative diagnostics.
          </p>

          {/* Branches Section */}
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Our Branches
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-xl mb-2">Balangoda</h4>
              <p className="text-gray-600">
                Located in the heart of Balangoda, offering comprehensive
                diagnostic services.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-xl mb-2">Rathnapura</h4>
              <p className="text-gray-600">
                Serving Rathnapura with advanced diagnostic testing and patient
                care.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-xl mb-2">Welimada</h4>
              <p className="text-gray-600">
                Conveniently located in Welimada, offering quality diagnostic
                services.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-xl mb-2">Kalawana</h4>
              <p className="text-gray-600">
                Providing exceptional laboratory services to the Kalawana
                region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-sky-400 hover:text-sky-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-600">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">
            Contact Us
          </h3>
          <form
            action="#"
            method="POST"
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
