import ChatBot from "@/components/chatbot/ChatBot";
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Contact Us
        </h1>

        {/* Contact Info */}
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Address
            </h2>
            <p className="text-gray-700">
              123 Meditech Street
              <br />
              Cityville, State 12345
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Phone</h2>
            <p className="text-gray-700">+1 (123) 456-7890</p>
            <p className="text-gray-700">Mon - Fri, 8:00 AM - 6:00 PM</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Email</h2>
            <p className="text-gray-700">support@meditechlab.com</p>
            <p className="text-gray-700">We reply within 24 hours</p>
          </div>
        </div>

        {/* Chatbot Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Need help? Chat with us!
          </h2>
          <ChatBot />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
