import Image from "next/image";
import React from "react";

const ChooseUs = () => {
  return (
    <div>
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
    </div>
  );
};

export default ChooseUs;
