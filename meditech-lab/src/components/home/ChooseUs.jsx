"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import LabTec from "../../assets/images/home/Lab.jpg";

const ChooseUs = () => {
  // Refs for animation elements
  const benefitRefs = useRef([]);
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  // Compact version of the benefits list
  const benefits = [
    "State-of-the-art laboratory services with gold standard diagnostics",
    "Most comprehensive test menu available in Sri Lanka",
    "Multiple locations for convenient access",
    "ISO certified with international quality control",
    "Recognized by WHO & international research organizations",
  ];

  useEffect(() => {
    // Setup Intersection Observer for animations
    const observerOptions = {
      root: null, // use viewport
      rootMargin: "0px",
      threshold: 0.1, // trigger when 10% visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when element is visible
          entry.target.classList.add("animate-in");
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe title
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Observe each benefit box
    benefitRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observe image
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <style jsx global>{`
          /* Base styles for elements before animation */
          .fade-up {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          /* Animation triggered by IntersectionObserver */
          .animate-in {
            opacity: 1;
            transform: translateY(0);
          }

          /* Staggered delays for benefit boxes */
          .delay-100 {
            transition-delay: 100ms;
          }
          .delay-200 {
            transition-delay: 200ms;
          }
          .delay-300 {
            transition-delay: 300ms;
          }
          .delay-400 {
            transition-delay: 400ms;
          }
          .delay-500 {
            transition-delay: 500ms;
          }
        `}</style>

        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8 fade-up"
        >
          Why Choose MediTech Laboratory?
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Content Section - Will be on the left on desktop, top on mobile */}
          <div className="w-full md:w-1/2 space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                ref={(el) => (benefitRefs.current[index] = el)}
                className={`bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300 fade-up delay-${
                  (index + 1) * 100
                }`}
              >
                <p className="text-gray-700 flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span>
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Image Section - Will be on the right on desktop, bottom on mobile */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div
              ref={imageRef}
              className="relative rounded-xl overflow-hidden shadow-xl fade-up delay-300"
            >
              <Image
                src={LabTec}
                alt="Medical Laboratory Professional"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/70 to-transparent p-4">
                <p className="text-white font-medium text-lg">
                  Excellence in Diagnostic Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
