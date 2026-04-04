"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import Lab from "../../assets/images/home/LabTec.jpeg";
import MainBranches from "./MainBranches";
import { useTranslation } from "react-i18next";

const LabNetwork = () => {
  const { t } = useTranslation();

  // Animation effect when elements come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shine {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          animation: shine 6s infinite linear;
          opacity: 0.5;
        }
      `}</style>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div
            className="text-center mb-10 animate-on-scroll"
            style={{ animation: "fadeInUp 0.6s ease-out forwards" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              {t("home.network.title")}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("home.network.description")}
            </p>
          </div>

          {/* Lab Image and Info Boxes */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Left side image with effect */}
            <div
              className="lg:w-1/2 animate-on-scroll shine-effect"
              style={{ animation: "scaleIn 0.8s ease-out forwards" }}
            >
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-102">
                <Image
                  src={Lab}
                  alt="Modern Laboratory Facility"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-700 hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
              </div>
            </div>

            {/* Right side info boxes */}
            <div className="lg:w-1/2 lg:mt-10">
              <div className="space-y-6">
                <div
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 animate-on-scroll"
                  style={{
                    animation: "fadeInUp 0.6s ease-out 0.2s forwards",
                    animationFillMode: "both",
                  }}
                >
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    {t("home.network.facilities.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("home.network.facilities.description")}
                  </p>
                </div>

                <div
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 animate-on-scroll"
                  style={{
                    animation: "fadeInUp 0.6s ease-out 0.4s forwards",
                    animationFillMode: "both",
                  }}
                >
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    {t("home.network.professionals.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("home.network.professionals.description")}
                  </p>
                </div>

                <div
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 animate-on-scroll"
                  style={{
                    animation: "fadeInUp 0.6s ease-out 0.6s forwards",
                    animationFillMode: "both",
                  }}
                >
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    {t("home.network.testRange.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("home.network.testRange.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics in text boxes with animations */}
          <div className="flex flex-col md:flex-row gap-6 mb-16">
            <div
              className="flex-1 bg-white border border-blue-200 p-6 rounded-lg shadow-md animate-on-scroll"
              style={{
                animation: "scaleIn 0.6s ease-out 0.3s forwards",
                animationFillMode: "both",
              }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-700">04</p>
                  <p className="font-medium text-gray-700">{t("home.network.statistics.mainBranches.title")}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                {t("home.network.statistics.mainBranches.description")}
              </p>
            </div>

            <div
              className="flex-1 bg-white border border-blue-200 p-6 rounded-lg shadow-md animate-on-scroll"
              style={{
                animation: "scaleIn 0.6s ease-out 0.5s forwards",
                animationFillMode: "both",
              }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
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
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-700">40+</p>
                  <p className="font-medium text-gray-700">
                    {t("home.network.statistics.collectionCenters.title")}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                {t("home.network.statistics.collectionCenters.description")}
              </p>
            </div>

            <div
              className="flex-1 bg-white border border-blue-200 p-6 rounded-lg shadow-md animate-on-scroll"
              style={{
                animation: "scaleIn 0.6s ease-out 0.7s forwards",
                animationFillMode: "both",
              }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-700">100+</p>
                  <p className="font-medium text-gray-700">
                    {t("home.network.statistics.islandWide.title")}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                {t("home.network.statistics.islandWide.description")}
              </p>
            </div>
          </div>

          <MainBranches />

          {/* Call to action */}
          <div
            className="text-center mt-12 animate-on-scroll"
            style={{
              animation: "fadeInUp 0.6s ease-out 1s forwards",
              animationFillMode: "both",
            }}
          >
            <Link href="/network">
              <span className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1">
                {t("home.network.ctaButton")}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabNetwork;
