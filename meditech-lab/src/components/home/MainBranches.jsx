"use client";
import React from "react";
import Image from "next/image";
import Balangoda from "../../assets/images/home/Balangoda.jpg";
import Rathnapura from "../../assets/images/home/Rathnapura.jpeg";
import Welimada from "../../assets/images/home/Welimada.jpg";
import Kalawana from "../../assets/images/home/Kalawana.jpg";

const MainBranches = () => {
  const branches = [
    {
      name: "Balangoda",
      image: Balangoda,
      address: "No:08, Kalthota Road, Balagahamula, Balangoda",
      phone: "+94 45 2288388",
    },
    {
      name: "Rathnapura",
      image: Rathnapura,
      address: "No:344, Hospital Junction, Colombo Road, Rathnapura",
      phone: "+94 45 222 6446",
    },
    {
      name: "Welimada",
      image: Welimada,
      address: "No:789 Hill Street, Welimada",
      phone: "+94 52 2245566",
    },
    {
      name: "Kalawana",
      image: Kalawana,
      address: "Hospital Road, Kalawana",
      phone: "+94 45 2255370",
    },
  ];
  return (
    <div>
      {/* Branch Locations */}
      <h3
        className="text-2xl font-bold text-blue-800 mb-8 text-center animate-on-scroll"
        style={{ animation: "fadeInUp 0.6s ease-out forwards" }}
      >
        Our Main Branches
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll"
            style={{
              animation: `fadeInUp 0.6s ease-out ${
                0.2 + index * 0.1
              }s forwards`,
              animationFillMode: "both",
            }}
          >
            <div className="relative h-48 w-full">
              <Image
                src={branch.image}
                alt={`${branch.name} Branch`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h4 className="text-white text-xl font-bold p-4">
                  {branch.name}
                </h4>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm mb-2">
                <svg
                  className="h-4 w-4 inline-block mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                {branch.address}
              </p>
              <p className="text-gray-600 text-sm">
                <svg
                  className="h-4 w-4 inline-block mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                {branch.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainBranches;
