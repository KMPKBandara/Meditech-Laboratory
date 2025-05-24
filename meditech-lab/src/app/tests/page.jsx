"use client";
import React, { useState, useMemo } from "react";
import testCategories from "../../assets/data/testCategories";
import TestCategorySelector from "@/components/tests/TestCategorySelector";
import TestList from "@/components/tests/TestList";
import TestDetailsModal from "@/components/tests/TestDetails";

const Tests = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTest, setSelectedTest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    fasting: "all", // all, required, not-required
    sampleType: "all", // all, blood, urine, etc.
    duration: "all", // all, same-day, next-day, 2-days, etc.
  });

  // Get all tests from all categories
  const allTests = useMemo(() => {
    return testCategories.flatMap((category) =>
      category.tests.map((test) => ({
        ...test,
        category: category.title,
      }))
    );
  }, []);

  // Get unique filter options
  const filterOptions = useMemo(() => {
    return {
      sampleTypes: [
        ...new Set(allTests.map((test) => test.sampleType).filter(Boolean)),
      ],
      durations: [
        ...new Set(allTests.map((test) => test.duration).filter(Boolean)),
      ],
    };
  }, [allTests]);

  // Filter tests based on category, search, and filters
  const filteredTests = useMemo(() => {
    let tests =
      selectedCategory === "all"
        ? allTests
        : testCategories.find((cat) => cat.title === selectedCategory)?.tests ||
          [];

    // Apply search filter
    if (searchTerm.trim()) {
      tests = tests.filter(
        (test) =>
          test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          test.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          test.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply other filters
    if (filters.fasting !== "all") {
      tests = tests.filter((test) =>
        filters.fasting === "required" ? test.fasting : !test.fasting
      );
    }

    if (filters.sampleType !== "all") {
      tests = tests.filter((test) => test.sampleType === filters.sampleType);
    }

    if (filters.duration !== "all") {
      tests = tests.filter((test) => test.duration === filters.duration);
    }

    return tests;
  }, [selectedCategory, searchTerm, filters, allTests]);

  const handleTestSelect = (test) => {
    setSelectedTest(test);
    setIsModalOpen(true);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      fasting: "all",
      sampleType: "all",
      duration: "all",
    });
    setSearchTerm("");
    setSelectedCategory("all");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between gap-6">
              {/* Title */}
              <h1 className="text-2xl font-bold text-gray-900 flex-shrink-0">
                Diagnostic Test Explorer
              </h1>

              {/* Search Bar */}
              <div className="relative flex-1 max-w-xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search tests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Results Count */}
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 flex-shrink-0">
                {filteredTests.length} tests
              </span>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-3">
              {/* Title and Results Count Row */}
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-900">
                  Test Explorer
                </h1>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {filteredTests.length}
                </span>
              </div>

              {/* Search Bar Row */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search tests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Sidebar - Filters and Categories */}
            <div className="xl:col-span-1 space-y-6">
              {/* Filter Options */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="bg-blue-600 px-4 py-3 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
                        />
                      </svg>
                      Filters
                    </h2>
                    <button
                      onClick={clearAllFilters}
                      className="text-xs text-white hover:text-gray-200 underline"
                    >
                      Clear All
                    </button>
                  </div>
                </div>
                <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
                  {/* Fasting Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fasting Requirement
                    </label>
                    <select
                      value={filters.fasting}
                      onChange={(e) =>
                        handleFilterChange("fasting", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="all">All Tests</option>
                      <option value="required">Fasting Required</option>
                      <option value="not-required">No Fasting Required</option>
                    </select>
                  </div>

                  {/* Sample Type Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sample Type
                    </label>
                    <select
                      value={filters.sampleType}
                      onChange={(e) =>
                        handleFilterChange("sampleType", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="all">All Types</option>
                      {filterOptions.sampleTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Duration Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Report Duration
                    </label>
                    <select
                      value={filters.duration}
                      onChange={(e) =>
                        handleFilterChange("duration", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="all">All Durations</option>
                      {filterOptions.durations.map((duration) => (
                        <option key={duration} value={duration}>
                          {duration}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Test Categories */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="bg-blue-600 px-4 py-3 rounded-t-lg">
                  <h2 className="text-lg font-semibold text-white flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    Categories
                  </h2>
                </div>
                <div className="p-4 max-h-96 overflow-y-auto">
                  <TestCategorySelector
                    categories={testCategories}
                    selected={selectedCategory}
                    onSelect={handleCategorySelect}
                    allTestsCount={allTests.length}
                  />
                </div>
              </div>
            </div>

            {/* Main Content - Test List */}
            <div className="xl:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="bg-blue-600 px-6 py-4 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                      Available Tests
                      {selectedCategory !== "all" && (
                        <span className="ml-2 text-blue-200">
                          - {selectedCategory}
                        </span>
                      )}
                    </h2>
                    <div className="flex items-center space-x-4">
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                        {filteredTests.length} tests
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <TestList
                    tests={filteredTests}
                    onSelect={handleTestSelect}
                    searchTerm={searchTerm}
                    showCategory={selectedCategory === "all"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Test Details Modal */}
      <TestDetailsModal
        test={selectedTest}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Tests;
