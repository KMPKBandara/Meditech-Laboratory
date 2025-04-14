import React from "react";

const Services = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Our Laboratory Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {/* Routine Testing Service */}
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Routine Testing</h3>
            <p className="text-gray-600">
              We offer a wide range of routine laboratory tests, including
              blood, urine, and clinical samples. Our tests are designed to
              provide fast and accurate results for general health assessments
              and disease screenings.
            </p>
          </div>

          {/* Specialized Diagnostics */}
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              Specialized Diagnostics
            </h3>
            <p className="text-gray-600">
              In addition to routine tests, we specialize in complex diagnostic
              testing, such as hormone profiling, allergy testing, and cancer
              marker identification. Our advanced technology ensures reliable
              and precise results.
            </p>
          </div>

          {/* Home Sample Collection */}
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              Home Sample Collection
            </h3>
            <p className="text-gray-600">
              We understand that visiting a laboratory can sometimes be
              inconvenient. Our home sample collection service allows us to send
              trained professionals to your home to collect samples for testing.
              It's safe, convenient, and hassle-free.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            At MediTech Laboratory, we are committed to providing the highest
            quality diagnostic services with cutting-edge technology and
            exceptional customer care. Whether it's a routine test or a
            specialized diagnostic procedure, we have you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
