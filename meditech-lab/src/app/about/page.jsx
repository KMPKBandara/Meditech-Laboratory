"use client";
import React from "react";

const AboutPage = () => {
  const milestones = [
    {
      year: "2008",
      title: "Walimada Branch",
      description:
        "Established as a semi-automated lab, upgraded to fully automated in 2014",
    },
    {
      year: "2009",
      title: "Balangoda Branch",
      description:
        "Started in 2009; now fully automated with LIS and digital reporting",
    },
    {
      year: "2010",
      title: "Kalawana Branch",
      description:
        "Launched as a semi-automated lab; upgraded to full automation in 2014",
    },
    {
      year: "2021",
      title: "Rathnapura Branch",
      description:
        "Launched with LIS and specialized departments like Biochemistry and Hematology",
    },
    {
      year: "2024",
      title: "40+ Sample Collection Centers",
      description:
        "Established across rural and urban regions for wide accessibility",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            About MediTech Laboratory
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Excellence in diagnostic services since 2008, serving communities
            across Sri Lanka
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
            Our Vision & Mission
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">👁️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800">Vision</h3>
              </div>
              <p className="text-gray-700">
                To be the most trusted and innovative diagnostic laboratory in
                the Sabaragamuwa Province, delivering accurate, timely, and
                affordable medical testing services that empower healthier
                communities and elevate the standard of healthcare through
                excellence, compassion, and technology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800">Mission</h3>
              </div>
              <p className="text-gray-700">
                Our mission is to provide accurate, reliable, and timely
                diagnostic services using advanced technology and a highly
                skilled team. We are committed to supporting physicians and
                improving patient outcomes by maintaining the highest standards
                of quality, ethics, and care in every test we perform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
            Our Journey of Excellence
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Building Trust Through Innovation
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span>
                  Meditech Laboratory Services was founded with the vision to
                  provide accurate, timely, and affordable diagnostic services
                  across Sri Lanka since 2008.
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span>
                  We've grown from a single semi-automated lab to a network of
                  advanced, fully automated laboratories and 40+ sample
                  collection centers.
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span>
                  Our four major branches - Walimada, Kalawana, Balangoda, and
                  Rathnapura - reflect our commitment to technological
                  excellence and accessibility.
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span>
                  Through continuous upgrades like next-gen analyzers, barcoding
                  systems, and AI-supported diagnostics, we reduce turnaround
                  time while increasing accuracy.
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span>
                  Our digital ecosystem ensures seamless service delivery for
                  both patients and clinicians through online portals and mobile
                  apps.
                </p>
              </div>
            </div>

            {/* Right Milestones */}
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-800 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Accuracy",
                description:
                  "Precise and reliable test results with state-of-the-art equipment",
              },
              {
                icon: "⚡",
                title: "Speed",
                description:
                  "Quick turnaround times without compromising quality",
              },
              {
                icon: "🤝",
                title: "Trust",
                description:
                  "Building lasting relationships through consistent excellence",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
