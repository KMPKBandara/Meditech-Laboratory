/*'use client';
import React from "react";
import BackgroundCarousel from "@/components/AboutUs/BackgroundCarousel";
import AboutSection from "@/components/AboutUs/AboutSection";
import MissionVision from "@/components/AboutUs/MissionVision";
import DirectorCarousel from "@/components/AboutUs/DirectorCarousel";
import BranchCarousel from "@/components/AboutUs/BranchCarousel";
import SocialMedia from "@/components/AboutUs/SocialMedia";


const AboutUs = () => {
  return (
    <div className="bg-white text-center">
      <BackgroundCarousel />
      <AboutSection />
      <MissionVision />
      <DirectorCarousel />
      <BranchCarousel />
      <SocialMedia />
    </div>
  );
};

export default AboutUs;
*/
"use client";
import React from "react";

const AboutPage = () => {
  const directors = [
    {
      name: "Dr. Nimal Perera",
      position: "Chairman & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      qualification: "MBBS, MD, PhD",
      experience: "25+ years",
    },
    {
      name: "Dr. Sanduni Fernando",
      position: "Chief Medical Officer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      qualification: "MBBS, MS, FCPS",
      experience: "20+ years",
    },
    {
      name: "Mr. Mahesh Wijesinghe",
      position: "Director of Operations",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      qualification: "MBA, BSc Engineering",
      experience: "18+ years",
    },
    {
      name: "Ms. Tharushi Jayawardena",
      position: "Director of Finance",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
      qualification: "CFA, ACCA, MBA",
      experience: "15+ years",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "Established first laboratory in Colombo",
    },
    {
      year: "2013",
      title: "Expansion",
      description: "Opened 5 branches across Western Province",
    },
    {
      year: "2016",
      title: "Technology Upgrade",
      description: "Introduced automated testing systems",
    },
    {
      year: "2019",
      title: "Digital Innovation",
      description: "Launched online reporting system",
    },
    {
      year: "2022",
      title: "ISO Certification",
      description: "Achieved ISO 15189 accreditation",
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Implemented AI-assisted diagnostics",
    },
  ];

  const achievements = [
    { number: "50,000+", label: "Tests Performed Monthly" },
    { number: "25+", label: "Branch Locations" },
    { number: "200+", label: "Qualified Staff" },
    { number: "98.5%", label: "Accuracy Rate" },
  ];

  const values = [
    {
      title: "Excellence",
      icon: "⭐",
      description: "Uncompromising quality in every test and service",
    },
    {
      title: "Innovation",
      icon: "🚀",
      description: "Embracing cutting-edge technology and methods",
    },
    {
      title: "Integrity",
      icon: "🛡️",
      description: "Ethical practices and transparent operations",
    },
    {
      title: "Compassion",
      icon: "❤️",
      description: "Caring for patients with empathy and respect",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About MediTech Laboratory
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            With a commitment to excellence in diagnostics, MediTech Laboratory
            provides high-quality, affordable medical testing services. Our
            vision is to make healthcare accessible and trustworthy through
            advanced technology and compassionate care.
          </p>
        </div>
      </div>

      {/* Achievement Stats */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Journey of Excellence
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming Sri Lanka's most trusted
              diagnostic laboratory network
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                  Building Trust Through Innovation
                </h3>
                <div className="space-y-4 text-gray-700 text-sm md:text-base">
                  <p>
                    Founded in 2010 by a team of visionary healthcare
                    professionals, MediTech Laboratory began with a simple yet
                    powerful mission: to democratize access to high-quality
                    diagnostic services across Sri Lanka. What started as a
                    single laboratory in Colombo has evolved into the nation's
                    most comprehensive diagnostic network.
                  </p>
                  <p>
                    Our commitment to excellence is reflected in our
                    state-of-the-art facilities, equipped with the latest
                    diagnostic technology including automated analyzers, digital
                    imaging systems, and AI-powered diagnostic tools. We've
                    consistently invested in technology upgrades to ensure our
                    patients receive the most accurate and timely results.
                  </p>
                  <p>
                    Today, we serve over 50,000 patients monthly across our 25+
                    branches, maintaining an industry-leading accuracy rate of
                    98.5%. Our team of 200+ qualified professionals work
                    tirelessly to uphold our standards of excellence.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-700 font-bold text-xs md:text-sm">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-1">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Director Board Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Director Board
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Meet the distinguished professionals who guide our mission and
              vision
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directors.map((director, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="relative mb-4">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full object-cover border-4 border-gray-200"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
                    {director.experience}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                  {director.name}
                </h3>
                <p className="text-gray-600 font-medium text-sm mb-2">
                  {director.position}
                </p>
                <p className="text-gray-500 text-xs">
                  {director.qualification}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Vision & Mission
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Driving the future of healthcare diagnostics through innovation
                and excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-lg">👁️</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    Vision
                  </h3>
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  To be the most trusted and innovative healthcare diagnostics
                  provider in the region, setting new standards for accuracy,
                  accessibility, and patient care while pioneering the
                  integration of artificial intelligence and advanced technology
                  in medical diagnostics.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-lg">⚡</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    Mission
                  </h3>
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  To deliver accurate, affordable, and timely diagnostic
                  services using cutting-edge medical technology, while
                  maintaining the highest standards of patient care, ethical
                  practices, and contributing to the advancement of healthcare
                  accessibility for all communities across Sri Lanka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
