"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    testType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const branches = [
    {
      name: "Balangoda Branch",
      address: "45 Main Street, Balangoda 70100",
      phone: "+94 45 228 7456",
      email: "balangoda@meditechlab.com",
      hours: "Mon - Sat: 7:00 AM - 7:00 PM",
    },
    {
      name: "Rathnapura Branch",
      address: "78 Hospital Road, Rathnapura 70000",
      phone: "+94 45 222 3891",
      email: "rathnapura@meditechlab.com",
      hours: "Mon - Sat: 6:30 AM - 8:00 PM",
    },
    {
      name: "Welimada Branch",
      address: "12 Central Avenue, Welimada 90200",
      phone: "+94 57 225 6742",
      email: "welimada@meditechlab.com",
      hours: "Mon - Fri: 7:30 AM - 6:30 PM",
    },
    {
      name: "Kalawana Branch",
      address: "33 Buddhist Road, Kalawana 70150",
      phone: "+94 47 228 5634",
      email: "kalawana@meditechlab.com",
      hours: "Mon - Sat: 7:00 AM - 7:30 PM",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        branch: "",
        testType: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(""), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact MediTech Laboratory
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for accurate medical testing services across
            our four convenient locations
          </p>
        </div>

        {/* Branch Locations */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Our Branch Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  {branch.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">📍</span>
                    <span className="text-gray-700">{branch.address}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📞</span>
                    <span className="text-gray-700">{branch.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">✉️</span>
                    <span className="text-gray-700 break-all">
                      {branch.email}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🕒</span>
                    <span className="text-gray-700">{branch.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Book a Test or Inquiry
            </h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                Thank you! Your message has been sent successfully. We'll
                contact you within 24 hours.
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+94 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="branch"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Branch *
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a branch</option>
                    <option value="Balangoda">Balangoda</option>
                    <option value="Rathnapura">Rathnapura</option>
                    <option value="Welimada">Welimada</option>
                    <option value="Kalawana">Kalawana</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="testType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Test Type/Service
                </label>
                <select
                  id="testType"
                  name="testType"
                  value={formData.testType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select test type</option>
                  <option value="Blood Tests">Blood Tests</option>
                  <option value="Urine Analysis">Urine Analysis</option>
                  <option value="X-Ray">X-Ray</option>
                  <option value="ECG">ECG</option>
                  <option value="Health Checkup">
                    Complete Health Checkup
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message/Special Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your requirements or any special instructions..."
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>

          {/* General Contact Info & Additional Services */}
          <div className="space-y-6">
            {/* Main Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                General Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-blue-600 text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Head Office
                    </h3>
                    <p className="text-gray-700">
                      123 Meditech Street
                      <br />
                      Cityville, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-blue-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Main Hotline
                    </h3>
                    <p className="text-gray-700">+94 11 234 5678</p>
                    <p className="text-sm text-gray-600">
                      24/7 Emergency Support
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-blue-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Email Support
                    </h3>
                    <p className="text-gray-700">support@meditechlab.com</p>
                    <p className="text-sm text-gray-600">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-blue-600 text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Operating Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday - Saturday: 6:30 AM - 8:00 PM
                    </p>
                    <p className="text-gray-700">Sunday: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Info */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-6 md:p-8 border border-green-200">
              <h2 className="text-2xl font-bold mb-4 text-green-800">
                Our Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Blood Analysis</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Urine Tests</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">X-Ray Services</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">ECG Testing</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Health Checkups</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Home Collection</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-200 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  💡 Home sample collection available in all branch areas with
                  prior appointment
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-lg p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-3">
                🚨 Emergency Contact
              </h3>
              <p className="text-red-700 mb-2">
                For urgent medical test requirements:
              </p>
              <p className="text-lg font-bold text-red-800">+94 11 999 8888</p>
              <p className="text-sm text-red-600">
                Available 24/7 for emergency services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
