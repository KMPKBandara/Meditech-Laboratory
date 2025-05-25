"use client";
import React from "react";
import scientist from "../../assets/images/home/scientist.jpg";
import RoutineTesting from "../../assets/images/home/Routine-Testing.jpg";
import HomeSample from "../../assets/images/home/Home-Sample-Collection.jpg";
import HealthPackages from "../../assets/images/home/Health-Packages.jpg";
import GeneticTesting from "../../assets/images/home/Genetic-Testing.jpg";
import Image from "next/image";
//../../assets/images/home/scientist.jpg

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Routine Testing",
      icon: "🧪",
      image: RoutineTesting,
      description: `Routine health checks including blood, urine, and other clinical tests to monitor general health and detect early signs of disease.`,
      highlights: [
        "✓ Complete Blood Count (CBC)",
        "✓ Liver, Kidney, and Thyroid Function",
        "✓ Diabetes & Lipid Profile",
        "✓ Same-day digital reports",
      ],
      duration: "4–6 hours",
      pricing: "From Rs. 500",
    },
    {
      id: 2,
      title: "Specialized Diagnostics",
      icon: "🔬",
      image: scientist,
      description: `Advanced diagnostics covering hormones, allergies, and cancer markers for deeper medical insights and condition tracking.`,
      highlights: [
        "✓ Hormone & Allergy Testing",
        "✓ Tumor & Cardiac Markers",
        "✓ Infectious & Autoimmune Panels",
        "✓ Expert result interpretation",
      ],
      duration: "24–48 hours",
      pricing: "From Rs. 2,500",
    },
    {
      id: 3,
      title: "Home Sample Collection",
      icon: "🏠",
      image: HomeSample,
      description: `Enjoy convenient sample collection at your doorstep. Ideal for elderly, children, or anyone who prefers not to travel.`,
      highlights: [
        "✓ Trained phlebotomists",
        "✓ Sterile, safe collection",
        "✓ GPS-tracked visits",
        "✓ Flexible scheduling",
      ],
      duration: "Same-day collection",
      pricing: "Rs. 300 + test fees",
    },
    {
      id: 4,
      title: "Corporate Health Packages",
      icon: "🏢",
      image: HealthPackages,
      description: `Custom wellness programs and screening packages for businesses, helping promote employee health and reduce absenteeism.`,
      highlights: [
        "✓ Annual checkups",
        "✓ Pre-employment screening",
        "✓ Wellness analytics & reports",
        "✓ On-site testing services",
      ],
      duration: "Flexible",
      pricing: "Custom pricing",
    },
    {
      id: 5,
      title: "Genetic Testing",
      icon: "🧬",
      image: GeneticTesting,
      description: `Discover your genetic blueprint. Identify hereditary risks, optimize medication, and plan for personalized healthcare.`,
      highlights: [
        "✓ Disease Risk Screening",
        "✓ Carrier & Paternity Testing",
        "✓ Pharmacogenomics",
        "✓ Genetic counseling",
      ],
      duration: "7–14 days",
      pricing: "From Rs. 15,000",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Main Laboratory Services
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Trusted diagnostics with modern technology and professional care.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">{service.icon}</span>
                  <h3 className="text-lg font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  {service.highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex justify-between text-sm text-gray-600 font-medium">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {service.duration}
                  </span>
                  <span>{service.pricing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
