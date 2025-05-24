"use client";
import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Feedback = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const testimonials = [
    {
      content:
        "Professional, clean, and quick service. Got my results faster than expected. The staff was attentive to my needs and the facility was immaculate. Highly recommended!",
      author: "Nimal Perera",
      position: "Regular Patient",
      rating: 5,
    },
    {
      content:
        "Friendly staff and reliable testing. I always visit MediTech for my regular checkups. The online appointment system is convenient, and wait times are minimal.",
      author: "Kumari Silva",
      position: "Long-term Patient",
      rating: 5,
    },
    {
      content:
        "As someone who travels frequently, I appreciate the efficiency and accuracy of MediTech's services. Their digital results portal makes it easy to access my medical information from anywhere.",
      author: "Asanka Fernando",
      position: "Business Executive",
      rating: 4,
    },
    {
      content:
        "The doctors at MediTech take time to explain test results thoroughly. I never feel rushed during consultations, and they address all my concerns with patience and expertise.",
      author: "Chamila Jayawardene",
      position: "Healthcare Professional",
      rating: 5,
    },
    {
      content:
        "First-class medical services with state-of-the-art equipment. The laboratory technicians are highly skilled, and the entire process from registration to receiving results is streamlined.",
      author: "Ranjan Gunaratne",
      position: "Senior Citizen",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-3">
              Patient Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover why thousands of patients trust MediTech Labs for their
              diagnostic needs. Our commitment to excellence is reflected in our
              patients' experiences.
            </p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md text-blue-800 hover:bg-blue-50 transition duration-300 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md text-blue-800 hover:bg-blue-50 transition duration-300 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 h-full">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 text-lg italic mb-6">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <p className="font-bold text-blue-900">
                            {testimonial.author}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSlide === index ? "bg-blue-800 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
