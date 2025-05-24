"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ReportPage({ params }) {
  const router = useRouter();
  const { id } = params; // FIX: removed incorrect use()

  const [loading, setLoading] = useState(true);
  const [reportData, setReportData] = useState(null);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setReportData({
        patientName: id === "LAB-12345" ? "John Doe" : "Sample Patient",
        testDate: "2025-04-01",
        results: [
          { name: "Hemoglobin", value: "13.5 g/dL", normal: "13.0 - 17.0 g/dL" },
          { name: "WBC", value: "6.2 x10⁹/L", normal: "4.0 - 11.0 x10⁹/L" },
          { name: "Platelets", value: "250 x10⁹/L", normal: "150 - 400 x10⁹/L" },
        ],
      });
      setLoading(false);
    }, 800); // Simulate network delay
  }, [id]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/report.pdf"; // Replace with actual path if needed
    link.download = `report.pdf`;
    link.click();
  };

  if (loading) {
    return <div className="text-center py-10">Loading report...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
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

      {/* Test Results Table */}
      <table className="min-w-full table-auto border-collapse mb-6">
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
            file="/report.pdf"
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
