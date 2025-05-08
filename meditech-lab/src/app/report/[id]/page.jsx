// app/reports/[id]/page.jsx

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ReportPage({ params }) {
  const router = useRouter();
  const { id } = params;
  const [loading, setLoading] = useState(true);
  const [reportData, setReportData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Simulate fetching data
    const fetchReport = async () => {
      setLoading(true);

      setTimeout(() => {
        if (id === "12345") {
          setReportData({
            patientName: "John Doe",
            testDate: "2025-04-01",
            results: [
              { name: "Blood Sugar", value: "98 mg/dL", normal: "70–99 mg/dL" },
              { name: "Hemoglobin", value: "14.2 g/dL", normal: "13.5–17.5 g/dL" },
            ],
          });
        } else {
          setError("No report found for this reference number.");
        }
        setLoading(false);
      }, 1000);
    };

    fetchReport();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading report...</div>;
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-red-100 text-red-700 rounded-lg">
        <h2 className="text-xl font-semibold">Error</h2>
        <p>{error}</p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Test Report - Ref: {id}</h1>

      <div className="mb-6">
        <p><strong>Patient:</strong> {reportData.patientName}</p>
        <p><strong>Date:</strong> {reportData.testDate}</p>
      </div>

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Test Name</th>
            <th className="border px-4 py-2 text-left">Result</th>
            <th className="border px-4 py-2 text-left">Normal Range</th>
          </tr>
        </thead>
        <tbody>
          {reportData.results.map((result, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{result.name}</td>
              <td className="border px-4 py-2 font-medium">{result.value}</td>
              <td className="border px-4 py-2 text-gray-600">{result.normal}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => alert("PDF download coming soon!")}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Download PDF
      </button>
    </div>
  );
}