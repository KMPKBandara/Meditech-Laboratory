"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set PDF.js worker 
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

export default function ReportPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();

  const referenceId = params.id;
  const branch = searchParams.get("branch");

  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (referenceId && branch) {
      const url = `/reports/${encodeURIComponent(branch)}/${encodeURIComponent(referenceId)}.pdf`;
      setPdfUrl(url);
    }
  }, [referenceId, branch]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100">
      {/* Blue Label Header */}
      <div className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow flex items-center space-x-3 mb-6 w-full max-w-4xl">
        <span className="text-2xl">📑</span>
        <h1 className="text-lg font-semibold">Lab Report Viewer</h1>
      </div>

      {/* PDF Card Container */}
      <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-3xl">
        {/* Back Button */}
        <button
          onClick={() => router.push("/download-report")}
          className="mb-6 bg-blue-100 text-blue-700 font-medium px-4 py-1 rounded-lg hover:bg-blue-200 transition shadow-sm"
        >
           Back to Report Search
        </button>

        {pdfUrl ? (
          <>
            {/* Scrollable PDF Viewer */}
            <div className="border-1 border-blue-100 rounded-md p-2 bg-gray-50 shadow-inner">
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(err) => {
                  console.error("PDF load error:", err);
                  setError(true);
                  setLoading(false);
                }}
                loading={<p className="text-blue-600 font-medium">Loading PDF document...</p>}
              >
                <div className="flex flex-col items-center space-y-6">
                 {Array.from(new Array(numPages), (el, index) => (
                   <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={1.0} className="shadow-lg border border-gray-200 rounded" />
                  ))}
                </div>  
              </Document>
            </div>

            {/* Download Button */}
            <div className="mt-6 text-right">
              <a
                href={pdfUrl}
                download={`${referenceId}-${branch}.pdf`}
                className="inline-block bg-blue-600 text-white px-6 py-1 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
              >
                 Download Report
              </a>
            </div>
          </>
        ) : (
          <div className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded mt-4">
            Report not found or invalid reference.
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-1 rounded mt-4 font-medium">
            ❌ Failed to load the PDF. It may not exist.
          </div>
        )}
      </div>
    </div>
  );
}
