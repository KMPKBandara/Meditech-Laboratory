// app/download-report/page.jsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DownloadReport() {
  const [referenceId, setReferenceId] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!referenceId.trim()) {
      setError("Please enter your reference number.");
      return;
    }

    // Redirect to dynamic report page
    router.push(`/reports/${encodeURIComponent(referenceId.trim())}`);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Download Your Report</h1>

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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          View Report
        </button>
      </form>
    </div>
  );
}