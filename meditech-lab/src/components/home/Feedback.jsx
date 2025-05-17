import React from "react";

const Feedback = () => {
  return (
    <div>
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

export default Feedback;
