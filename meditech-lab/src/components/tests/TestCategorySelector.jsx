import React from "react";

const TestCategorySelector = ({
  categories,
  onSelect,
  selected,
  allTestsCount,
}) => {
  return (
    <div className="space-y-2">
      {/* All Tests Option */}
      <button
        onClick={() => onSelect("all")}
        className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
          selected === "all"
            ? "bg-blue-600 text-white shadow-md"
            : "bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 border border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
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
            <span className="font-medium">All Tests</span>
          </div>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              selected === "all"
                ? "bg-white bg-opacity-20 text-white"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            {allTestsCount}
          </span>
        </div>
      </button>

      {/* Category Separator */}
      <div className="flex items-center my-3">
        <div className="flex-1 border-t border-gray-200"></div>
        <span className="px-3 text-xs text-gray-500 bg-gray-50">
          Categories
        </span>
        <div className="flex-1 border-t border-gray-200"></div>
      </div>

      {/* Individual Categories */}
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => onSelect(cat.title)}
          className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
            selected === cat.title
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 border border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className={`w-2 h-2 rounded-full mr-3 ${
                  selected === cat.title ? "bg-white" : "bg-blue-400"
                }`}
              />
              <span className="font-medium text-sm">{cat.title}</span>
            </div>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                selected === cat.title
                  ? "bg-white bg-opacity-20 text-white"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {cat.tests?.length || 0}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default TestCategorySelector;
