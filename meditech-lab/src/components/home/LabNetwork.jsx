import Link from "next/link";
import React from "react";

const LabNetwork = () => {
  return (
    <div>
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
    </div>
  );
};

export default LabNetwork;
