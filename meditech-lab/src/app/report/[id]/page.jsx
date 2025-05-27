"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set PDF.js worker from CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ReportPage() {
  const searchParams = useSearchParams();
  const referenceId = searchParams.get("id");
  const branch = searchParams.get("branch");

  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (referenceId && branch) {
      const url = `/uploads/${encodeURIComponent(branch)}/${encodeURIComponent(referenceId)}.pdf`;
      setPdfUrl(url);
    }
  }, [referenceId, branch]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Lab Report Viewer</h1>

      {pdfUrl ? (
        <>
          <div className="bg-white p-4 shadow rounded">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(err) => {
                console.error("PDF load error:", err);
                setError(true);
                setLoading(false);
              }}
              loading={<p>Loading PDF...</p>}
            >
              <Page pageNumber={pageNumber} scale={1.5} />
            </Document>
          </div>

          {numPages && !error && (
            <div className="mt-4 text-gray-700">
              Page {pageNumber} of {numPages}
            </div>
          )}

          {/* Download Button */}
          <a
            href={pdfUrl}
            download={`${referenceId}-${branch}.pdf`}
            className="mt-4 px-5 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            Download Report
          </a>
        </>
      ) : (
        <p className="text-red-500 mt-4">Report not found or invalid reference.</p>
      )}

      {error && (
        <p className="text-red-500 mt-4">Failed to load the PDF. It may not exist.</p>
      )}
    </div>
  );
}
