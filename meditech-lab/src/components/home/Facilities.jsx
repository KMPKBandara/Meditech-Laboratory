/*import React from "react";
import AutomatedAnalyzers from "../../assets/images/home/Automated-Analyzers.jpg";
import ReportDelivery from "../../assets/images/home/Report-Delivery.jpg";
import SampleHandling from "../../assets/images/home/Sample-Handling.jpg";

const Facilities = () => {
  return (
    <div>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Our Facilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">
                Automated Analyzers
              </h3>
              <p className="text-gray-600">
                State-of-the-art equipment for accurate and fast results.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">
                24/7 Sample Handling
              </h3>
              <p className="text-gray-600">
                Round-the-clock sample reception and processing.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">
                Secure Report Delivery
              </h3>
              <p className="text-gray-600">
                Digital reports via SMS, email, and our secure portal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;

// second one is this
import AutomatedAnalyzers from "../../assets/images/home/Automated-Analyzers.jpg";
import ReportDelivery from "../../assets/images/home/Report-Delivery.jpg";
import SampleHandling from "../../assets/images/home/Sample-Handling.jpg";

import React, { useState, useEffect, useRef } from "react";
import { Microscope, Clock, FileText, CheckCircle } from "lucide-react";

const Facilities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-section");
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const facilities = [
    {
      icon: <Microscope className="w-14 h-14 text-white" />,
      title: "Automated Analyzers",
      description:
        "State-of-the-art equipment for accurate and fast results with industry-leading precision.",
      benefits: [
        "99.8% Accuracy Rate",
        "Results in 30 minutes",
        "Comprehensive panels",
      ],
      bgImage: AutomatedAnalyzers,
    },
    {
      icon: <Clock className="w-14 h-14 text-white" />,
      title: "24/7 Sample Handling",
      description:
        "Round-the-clock sample reception and processing to ensure timely delivery of results.",
      benefits: [
        "24/7 Emergency Services",
        "Same-day reporting",
        "Priority queueing",
      ],
      bgImage: SampleHandling,
    },
    {
      icon: <FileText className="w-14 h-14 text-white" />,
      title: "Secure Report Delivery",
      description:
        "Digital reports via SMS, email, and our secure portal with end-to-end encryption.",
      benefits: [
        "End-to-end encryption",
        "Multiple formats",
        "Instant notifications",
      ],
      bgImage: ReportDelivery,
    },
  ];

  return (
    <div className="bg-white">
      <style jsx>{`
        .animate-section {
          animation: fadeInUp 0.8s ease forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .parallax-bg {
          transition: transform 0.3s ease-out;
        }

        .facility-section:hover .parallax-bg {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .facility-content {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>

      <section className="py-8 md:py-12 max-w-7xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } text-center mb-10`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">
            Advanced Laboratory Facilities
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our laboratory is equipped with cutting-edge technology to deliver
            precise, reliable, and timely diagnostic services.
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {facilities.map((facility, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`facility-section opacity-0 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-center gap-0 md:gap-8`}
              >
                <div className="w-full md:w-1/2 mb-0">
                  <div className="relative overflow-hidden rounded-lg shadow-lg h-48 md:h-72">
                    <div className="absolute inset-0 parallax-bg">
                      <img
                        src={facility.bgImage}
                        alt={facility.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center">
                      <div className="p-4 rounded-full bg-blue-600 bg-opacity-70 mb-4">
                        {facility.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {facility.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 bg-gray-50 p-4 md:p-6 rounded-lg shadow-md facility-content">
                  <p className="text-gray-700 text-base mb-4">
                    {facility.description}
                  </p>
                  <div className="space-y-2">
                    {facility.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={(el) => (sectionRefs.current[3] = el)}
          className="mt-14 opacity-0"
        >
          <div className="bg-white border border-blue-100 rounded-xl p-6 md:p-8 shadow-md">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-800">
                Our Laboratory Excellence
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                ["50+", "Specialized Tests"],
                ["24/7", "Availability"],
                ["15+", "Years Experience"],
                ["30k+", "Tests Monthly"],
              ].map(([value, label], idx) => (
                <div
                  key={idx}
                  className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">
                    {value}
                  </div>
                  <div className="text-gray-600 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;*/

"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";
import AutomatedAnalyzers from "../../assets/images/home/Automated-Analyzers.jpg";
import SampleHandling from "../../assets/images/home/Sample-Handling.jpg";
import ReportDelivery from "../../assets/images/home/Report-Delivery.jpg";

const FacilitySection = ({
  title,
  description,
  image,
  imagePosition,
  features,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: imagePosition === "left" ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: imagePosition === "left" ? 30 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div ref={ref} className="py-16 border-b border-gray-100">
      <div
        className={`flex flex-col ${
          imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8 items-center`}
      >
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover transition-transform hover:scale-105 duration-700"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-4">{title}</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3 + index * 0.1, duration: 0.5 },
                  },
                }}
              >
                <CheckCircle className="text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Facilities = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const facilities = [
    {
      title: "Advanced Automated Analyzers",
      description:
        "Our laboratory is equipped with cutting-edge automated analyzers that deliver exceptional accuracy and rapid turnaround times. These state-of-the-art instruments utilize the latest technologies in clinical diagnostics, ensuring precise results for all test parameters.",
      features: [
        "High-throughput processing capabilities for efficient workflow",
        "Multi-parameter analysis with minimal sample volume requirements",
        "Real-time monitoring and quality control systems",
        "Interfaced with laboratory information systems for seamless data transfer",
      ],
      imagePosition: "left",
    },
    {
      title: "24/7 Sample Handling Facility",
      description:
        "Our laboratory operates round-the-clock to accommodate urgent testing needs and ensure continuous service. With dedicated staff available at all hours, we process specimens promptly upon arrival, maintaining specimen integrity and delivering timely results when they matter most.",
      features: [
        "Temperature-controlled specimen reception areas",
        "Barcode tracking system for complete chain of custody",
        "Multiple collection points throughout the region",
        "Specialized transport systems for maintaining sample integrity",
      ],
      imagePosition: "right",
    },
    {
      title: "Secure Report Delivery Systems",
      description:
        "Patient confidentiality and data security are paramount at our facility. We've implemented comprehensive digital solutions that enable quick access to test results while maintaining strict privacy controls. Our multi-channel reporting system adapts to your preferred communication method.",
      features: [
        "Encrypted portal access with two-factor authentication",
        "Automated notifications when results are available",
        "Integration capabilities with electronic medical record systems",
        "Customizable report formats for specialized clinical needs",
      ],
      imagePosition: "left",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial="hidden"
            animate={controls}
            variants={headerVariants}
          >
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              State-of-the-Art Facilities
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our laboratory is equipped with the latest technology and staffed
              by highly trained professionals to ensure accurate, timely, and
              reliable diagnostic services.
            </p>
          </motion.div>

          <div className="space-y-8">
            <FacilitySection
              title="Advanced Automated Analyzers"
              description="Our laboratory is equipped with cutting-edge automated analyzers that deliver exceptional accuracy and rapid turnaround times. These state-of-the-art instruments utilize the latest technologies in clinical diagnostics, ensuring precise results for all test parameters."
              features={[
                "High-throughput processing capabilities for efficient workflow",
                "Multi-parameter analysis with minimal sample volume requirements",
                "Real-time monitoring and quality control systems",
                "Interfaced with laboratory information systems for seamless data transfer",
              ]}
              imagePosition="left"
              image={AutomatedAnalyzers}
            />

            <FacilitySection
              title="24/7 Sample Handling Facility"
              description="Our laboratory operates round-the-clock to accommodate urgent testing needs and ensure continuous service. With dedicated staff available at all hours, we process specimens promptly upon arrival, maintaining specimen integrity and delivering timely results when they matter most."
              features={[
                "Temperature-controlled specimen reception areas",
                "Barcode tracking system for complete chain of custody",
                "Multiple collection points throughout the region",
                "Specialized transport systems for maintaining sample integrity",
              ]}
              imagePosition="right"
              image={SampleHandling}
            />

            <FacilitySection
              title="Secure Report Delivery Systems"
              description="Patient confidentiality and data security are paramount at our facility. We've implemented comprehensive digital solutions that enable quick access to test results while maintaining strict privacy controls. Our multi-channel reporting system adapts to your preferred communication method."
              features={[
                "Encrypted portal access with two-factor authentication",
                "Automated notifications when results are available",
                "Integration capabilities with electronic medical record systems",
                "Customizable report formats for specialized clinical needs",
              ]}
              imagePosition="left"
              image={ReportDelivery}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
