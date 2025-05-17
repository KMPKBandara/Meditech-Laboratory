import React from "react";

const Services = () => {
  return (
    <div>
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
    </div>
  );
};

export default Services;
