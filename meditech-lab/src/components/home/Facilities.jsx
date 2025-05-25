"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";
import AutomatedAnalyzers from "../../assets/images/home/Automated-Analyzers.jpg";
import SampleHandling from "../../assets/images/home/Sample-Handling.jpg";
import ReportDelivery from "../../assets/images/home/Report-Delivery.jpg";
import Image from "next/image";

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
            <Image
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
