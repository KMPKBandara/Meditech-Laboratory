"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DownloadReport() {
  const [referenceId, setReferenceId] = useState("");
  const [branch, setBranch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!referenceId.trim()) {
      setError("Please enter your reference number.");
      return;
    }

    if (!branch) {
      setError("Please select your lab branch.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push(
        `/report/${encodeURIComponent(referenceId.trim())}?branch=${encodeURIComponent(branch)}`
      );
    }, 800);
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white shadow-xl rounded-2xl transition-all duration-300">
      
      {/* Blue Header Label Box */}
      <div className="bg-blue-600 text-white px-4 py-3 rounded-lg shadow flex items-center space-x-3 mb-6">
        <span className="text-2xl">📄</span>
        <h1 className="text-lg font-semibold">Download Your Report</h1>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Enter your reference number and select your lab branch to view and download your lab report securely.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Reference Number Input */}
        <div className="mb-4">
          <label htmlFor="referenceId" className="block text-gray-700 font-medium mb-2">
            Reference Number
          </label>
          <input
            type="text"
            id="referenceId"
            value={referenceId}
            onChange={(e) => {
              setReferenceId(e.target.value);
              setError("");
            }}
            placeholder="E.g., LAB-12345"
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <p className="text-gray-500 text-sm mt-1">Format: LAB-XXXXXX</p>
        </div>

        {/* Branch Dropdown */}
        <div className="mb-4">
          <label htmlFor="branch" className="block text-gray-700 font-medium mb-2">
            Lab Branch
          </label>
          <select
            id="branch"
            value={branch}
            onChange={(e) => {
              setBranch(e.target.value);
              setError("");
            }}
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Select a Branch</option>
            <option value="Balangoda">Balangoda</option>
            <option value="Rathnapura">Rathnapura</option>
            <option value="Welimada">Welimada</option>
            <option value="Kalawana">Kalawana</option>
          </select>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-sm mt-1 font-medium" role="alert">
            {error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white py-2 px-4 rounded-lg font-semibold shadow-md transition duration-300 ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            "View Report"
          )}
        </button>
      </form>

      <p className="text-gray-600 text-sm text-center mt-6">
        Need help?{" "}
        <a href="mailto:info@meditechlab.lk" className="text-blue-600 hover:underline">
          info@meditechlab.lk
        </a>
      </p>
    </div>
  );
}
