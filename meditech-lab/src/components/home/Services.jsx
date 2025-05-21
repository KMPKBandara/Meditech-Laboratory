"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import scientist from "../../assets/images/home/scientist.jpg";
import RoutineTesting from "../../assets/images/home/Routine-Testing.jpg";
import HomeSample from "../../assets/images/home/Home-Sample-Collection.jpg";
import HealthPackages from "../../assets/images/home/Health-Packages.jpg";
import GeneticTesting from "../../assets/images/home/Genetic-Testing.jpg";

// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Services = () => {
  // Services data array with 6 services
  // Adding imagePath property for each service to easily update images later
  const services = [
    {
      title: "Routine Testing",
      description:
        "Comprehensive blood, urine, and clinical sample analysis with rapid results.",
      icon: "🧪",
      imagePath: RoutineTesting, // Default image - can be easily replaced later
      imageAlt: "Routine testing laboratory equipment",
    },
    {
      title: "Specialized Diagnostics",
      description:
        "Advanced testing for hormones, allergies, and cancer markers with expert interpretation.",
      icon: "🔬",
      imagePath: scientist, // Default image - can be easily replaced later
      imageAlt: "Specialized diagnostic equipment",
    },
    {
      title: "Home Sample Collection",
      description:
        "Professional sample collection at your doorstep with strict adherence to protocols.",
      icon: "🏠",
      imagePath: HomeSample, // Default image - can be easily replaced later
      imageAlt: "Home sample collection service",
    },
    {
      title: "Corporate Health Packages",
      description:
        "Customized screening programs for organizations to maintain employee wellness.",
      icon: "🏢",
      imagePath: HealthPackages, // Default image - can be easily replaced later
      imageAlt: "Corporate health services",
    },
    {
      title: "Genetic Testing",
      description:
        "DNA analysis for hereditary conditions, carrier status, and personalized medicine.",
      icon: "🧬",
      imagePath: GeneticTesting, // Default image - can be easily replaced later
      imageAlt: "Genetic testing equipment",
    },
  ];

  // Animation references
  const titleRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    // Setup Intersection Observer for animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (swiperRef.current) {
      observer.observe(swiperRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <style jsx global>{`
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          position: relative;
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.7) 100%
          );
          z-index: 1;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .service-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .swiper-pagination-bullet {
          background: #3b82f6;
          opacity: 0.6;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #1d4ed8;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #1d4ed8;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12 fade-up"
        >
          Our Comprehensive Services
        </h2>

        <div ref={swiperRef} className="fade-up">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="py-8"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-card bg-white rounded-xl shadow-lg h-80">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.imagePath}
                      alt={service.imageAlt}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>

                  <div className="service-content p-6 text-white">
                    <div className="mb-2 text-4xl">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-100">{service.description}</p>
                    <Link
                      href="/services"
                      className="mt-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white font-medium py-2 px-6 rounded-full border border-white/30 transition-all duration-300 inline-flex items-center justify-center group"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
