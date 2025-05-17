import React from "react";

const Facilities = () => {
  return (
    <div>
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
    </div>
  );
};

export default Facilities;
