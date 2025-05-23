import React from "react";

const TestList = ({ tests, onSelect, searchTerm, showCategory = false }) => {
  if (!tests || tests.length === 0) {
    const message = searchTerm
      ? `No tests found matching "${searchTerm}"`
      : "No tests available with current filters";

    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No Tests Found
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">{message}</p>
        {searchTerm && (
          <p className="text-sm text-blue-600 mt-2">
            Try adjusting your search terms or filters
          </p>
        )}
      </div>
    );
  }

  const highlightText = (text, highlight) => {
    if (!highlight.trim()) return text;

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-gray-900 rounded px-1">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="space-y-4">
      {/* Grid Layout for larger screens, List for mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {tests.map((test, idx) => (
          <div
            key={idx}
            onClick={() => onSelect(test)}
            className="group p-5 cursor-pointer rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 bg-white hover:shadow-md"
          >
            {/* Test Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-2">
                  {highlightText(test.name, searchTerm)}
                </h3>
                {showCategory && test.category && (
                  <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full mb-2">
                    {test.category}
                  </span>
                )}
              </div>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:transform group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            {/* Test Description */}
            {test.description && (
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {highlightText(
                  test.description.substring(0, 120) + "...",
                  searchTerm
                )}
              </p>
            )}

            {/* Test Info Badges */}
            <div className="flex flex-wrap gap-2">
              {test.fasting && (
                <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded-full border border-red-200">
                  <svg
                    className="w-3 h-3 inline mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Fasting
                </span>
              )}
              {test.sampleType && (
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200">
                  <svg
                    className="w-3 h-3 inline mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  {test.sampleType}
                </span>
              )}
              {test.duration && (
                <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-200">
                  <svg
                    className="w-3 h-3 inline mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {test.duration}
                </span>
              )}
            </div>

            {/* Age Limit if available */}
            {test.ageLimit && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-500">
                  <svg
                    className="w-3 h-3 inline mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Age: {test.ageLimit}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button - for future pagination */}
      {tests.length > 0 && (
        <div className="text-center pt-6">
          <p className="text-sm text-gray-500">
            Showing {tests.length} test{tests.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}
    </div>
  );
};

export default TestList;
