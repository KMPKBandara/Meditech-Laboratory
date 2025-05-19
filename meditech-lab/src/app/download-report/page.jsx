// app/download-report/page.jsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DownloadReport() {
  const [referenceId, setReferenceId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!referenceId.trim()) {
      setError("Please enter your reference number.");
      return;
    }
  
    setLoading(true);

     // Simulate delay for better UX (optional)
    setTimeout(() => {
      setLoading(false);
      router.push(`/report/${encodeURIComponent(referenceId.trim())}`);
    }, 800);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow-lg rounded-lg">
            {/* Icon/Emoji */}
            <div className="flex justify-center mb-4">
        <span className="text-5xl">📄</span>
      </div>
            {/* Title and Description */}
      <h1 className="text-2xl font-bold text-center mb-6">Download Your Report</h1>
      <p className="text-gray-600 text-center mb-4">
        Enter your reference number to view and download your lab report securely.
      </p>

    {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="referenceId" className="block text-gray-700 font-medium mb-2">
            Enter Reference Number
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
            aria-label="Reference Number"
            aria-describedby="reference-help reference-error"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p id="reference-help" className="text-gray-500 text-sm mt-1">
            Format: LAB-XXXXXX (e.g., LAB-12345)
          </p>

          {error && (
            <p id="reference-error" className="text-red-500 text-sm mt-1" role="alert">
              {error}
            </p>
          )}
        </div>

        {/* Submit Button with Loading State */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white py-2 px-4 rounded-md transition ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
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

      {/* Footer Message */}
      <p className="text-gray-500 text-sm text-center mt-6">
        For assistance, contact our support team at{" "}
        <a href="mailto:support@example.com" className="text-blue-600 hover:underline">
         info@meditechlab.lk
        </a>
      </p>
    </div>
  );
}