"use client";
import React, { useState, useEffect } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import testimonials from "@/assets/data/feedback";

const Feedback = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    rating: 0,
    feedback: "",
  });
  const [submittedFeedback, setSubmittedFeedback] = useState([]);

  // Combine original testimonials with submitted feedback
  const allTestimonials = [...testimonials, ...submittedFeedback];

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === allTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? allTestimonials.length - 1 : prev - 1
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [allTestimonials.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.feedback && formData.rating > 0) {
      const newFeedback = {
        content: formData.feedback,
        author: formData.name,
        position: formData.position || "Patient",
        rating: formData.rating,
      };

      setSubmittedFeedback((prev) => [...prev, newFeedback]);

      // Reset form
      setFormData({
        name: "",
        position: "",
        email: "",
        rating: 0,
        feedback: "",
      });

      setShowForm(false);

      // Show success message (you could replace this with a toast notification)
      alert("Thank you for your feedback! Your testimonial has been added.");
    }
  };

  const StarRating = ({ rating, onRatingClick, interactive = false }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={`${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            } ${
              interactive
                ? "cursor-pointer hover:scale-110 transition-transform"
                : ""
            }`}
            onClick={interactive ? () => onRatingClick(i + 1) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-50">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
              Patient Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Discover why thousands of patients trust MediTech Labs for their
              diagnostic needs. Our commitment to excellence is reflected in our
              patients' experiences.
            </p>
          </div>

          {/* Add Feedback Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              <MessageSquare className="mr-2" size={20} />
              {showForm ? "Hide Feedback Form" : "Share Your Experience"}
            </button>
          </div>

          {/* Feedback Form */}
          {showForm && (
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Share Your Feedback
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position/Role
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Patient, Healthcare Professional"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating *
                  </label>
                  <div className="flex items-center space-x-2">
                    <StarRating
                      rating={formData.rating}
                      onRatingClick={handleRatingClick}
                      interactive={true}
                    />
                    <span className="text-sm text-gray-600 ml-2">
                      {formData.rating > 0
                        ? `${formData.rating} out of 5 stars`
                        : "Click to rate"}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Feedback *
                  </label>
                  <textarea
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Share your experience with MediTech Labs..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Send className="mr-2" size={20} />
                    Submit Feedback
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Testimonials Slider */}
          <div className="relative">
            {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
            <button
              onClick={prevSlide}
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md text-blue-800 hover:bg-blue-50 transition duration-300 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md text-blue-800 hover:bg-blue-50 transition duration-300 focus:outline-none"
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
                {allTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2 md:px-4"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 h-full">
                      <div className="flex mb-4">
                        <StarRating rating={testimonial.rating} />
                      </div>
                      <p className="text-gray-700 text-base md:text-lg italic mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <p className="font-bold text-blue-900 text-sm md:text-base">
                            {testimonial.author}
                          </p>
                          <p className="text-gray-500 text-xs md:text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden justify-center mt-4 space-x-4">
              <button
                onClick={prevSlide}
                className="bg-white p-2 rounded-full shadow-md text-blue-800 hover:bg-blue-50 transition duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white p-2 rounded-full shadow-md text-blue-800 hover:bg-blue-50 transition duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {allTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "bg-blue-800 w-4 md:w-6"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          {submittedFeedback.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Thank you to all {allTestimonials.length} patients who shared
                their experiences with us!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Feedback;
