// app/reports/[id]/page.jsx

"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ReportPage({ params }) {
  const router = useRouter();
  const { id } = params;

  const [loading, setLoading] = useState(true);
  const [reportData, setReportData] = useState(null);
  const [numPages, setNumPages] = useState(null);

  // Real report data
  const realData = {
    patientName: "John Doe",
    testDate: "2025-04-01",
    results: [
      { name: "Blood Sugar", value: "98 mg/dL", normal: "70–99 mg/dL" },
      { name: "Hemoglobin", value: "14.2 g/dL", normal: "13.5–17.5 g/dL" },
    ],
  };

  // Dummy/sample report data
  const sampleData = {
    patientName: "Sample Patient",
    testDate: "2025-04-01",
    results: [
      { name: "Cholesterol", value: "190 mg/dL", normal: "150–200 mg/dL" },
      { name: "Creatinine", value: "1.0 mg/dL", normal: "0.6–1.2 mg/dL" },
    ],
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      // Show real report only for known ID
      if (id === "LAB-12345") {
        setReportData(realData);
      } else {
        // Show sample for any other ID
        setReportData(sampleData);
      }

      setLoading(false);
    }, 800); // Simulate network delay
  }, [id]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/report.pdf"; // ✅ correct relative URL
    link.download = `report.pdf`; // Optional: dynamic filename
    link.click();
  };

  if (loading) {
    return <div className="text-center py-10">Loading report...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      {/* Optional warning for demo */}
      {id !== "LAB-12345" && (
        <div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded">
          ⚠️ This is a sample report for demonstration purposes.
        </div>
      )}

      <h1 className="text-2xl font-bold mb-4">Test Report - Ref: {id}</h1>

      <div className="mb-6">
        <p>
          <strong>Patient:</strong> {reportData.patientName}
        </p>
        <p>
          <strong>Date:</strong> {reportData.testDate}
        </p>
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
              <td className="border px-4 py-2 text-gray-600">
                {result.normal}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PDF Viewer */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Report Preview</h2>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <Document
            file="/report.pdf" // ✅ use the public URL
            onLoadSuccess={onDocumentLoadSuccess}
            loading="Loading PDF..."
            error="Failed to load PDF."
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Download PDF
      </button>
    </div>
  );
}
