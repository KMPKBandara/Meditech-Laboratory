"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function DownloadReport() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [referenceId, setReferenceId] = useState("");
  const [branch, setBranch] = useState("");
  const [testDate, setTestDate] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState(null);
  const [recentRefs, setRecentRefs] = useState([]);

  // Load form data from sessionStorage only if coming from query
  useEffect(() => {
    const refFromQuery = searchParams.get("ref");
    const branchFromQuery = searchParams.get("branch");
    const dateFromQuery = searchParams.get("date");

    if (refFromQuery) {
      setReferenceId(refFromQuery);
      setBranch(branchFromQuery || "");
      setTestDate(dateFromQuery || "");

      sessionStorage.setItem("referenceId", refFromQuery);
      sessionStorage.setItem("branch", branchFromQuery || "");
      sessionStorage.setItem("testDate", dateFromQuery || "");
    }

    const storedRefs = JSON.parse(sessionStorage.getItem("recentRefs") || "[]");
    setRecentRefs(storedRefs);

    return () => {
      // 🔥 Clear session when leaving this page
      sessionStorage.removeItem("referenceId");
      sessionStorage.removeItem("branch");
      sessionStorage.removeItem("testDate");
      // You can keep recentRefs if needed for suggestions
    };
  }, []);

  const saveReferenceHistory = (newRef) => {
    let history = JSON.parse(sessionStorage.getItem("recentRefs") || "[]");
    if (!history.includes(newRef)) {
      history = [newRef, ...history].slice(0, 5);
      sessionStorage.setItem("recentRefs", JSON.stringify(history));
      setRecentRefs(history);
    }
  };

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

    if (!testDate) {
      setError("Please select your test date.");
      return;
    }

    setError("");
    setLoading(true);

    sessionStorage.setItem("referenceId", referenceId);
    sessionStorage.setItem("branch", branch);
    sessionStorage.setItem("testDate", testDate);
    saveReferenceHistory(referenceId);

    router.push(
      `/download-report?ref=${encodeURIComponent(referenceId)}&branch=${encodeURIComponent(branch)}&date=${encodeURIComponent(testDate)}`
    );

    setTimeout(() => {
      setReports([
        { name: "FBS - FASTING PLASMA GLUCOSE", status: "Report Ready" },
        { name: "LIPID PROFILE", status: "Report Ready" },
      ]);
      setLoading(false);
    }, 800);
  };

  const handleView = (reportName) => {
    router.push(
      `/report/${encodeURIComponent(referenceId)}?branch=${encodeURIComponent(branch)}&date=${encodeURIComponent(testDate)}&report=${encodeURIComponent(reportName)}`
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white shadow-xl rounded-2xl">
      <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg shadow flex items-center space-x-3 mb-6">
        <span className="text-2xl">📄</span>
        <h1 className="text-lg font-semibold">Download Your Report</h1>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Please enter requested details to view and download your lab report securely.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Reference Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Reference Number
          </label>
          <input
            type="text"
            value={referenceId}
            onChange={(e) => {
              setReferenceId(e.target.value);
              setError("");
            }}
            list="recent-ref-list"
            placeholder="E.g.: LAB-12345"
            className="w-11/12 max-w-[60%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <datalist id="recent-ref-list">
            {recentRefs.map((ref, i) => (
              <option key={i} value={ref} />
            ))}
          </datalist>
        </div>

       {/* Branch Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Lab Branch</label>
          <div className="relative w-11/12 max-w-[60%]">
            <select
              value={branch}
              onChange={(e) => {
               setBranch(e.target.value);
               setError("");
              }}
             className="appearance-none w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
             >
               <option value="">Select a Branch</option>
               <option value="Balangoda">Balangoda</option>
               <option value="Rathnapura">Rathnapura</option>
               <option value="Welimada">Welimada</option>
               <option value="Kalawana">Kalawana</option>
            </select>

     {/* Custom dropdown arrow icon  */}
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg
           className="w-7 h-4 text-bold-black-500"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           viewBox="0 0 24 24"
        >
             <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>


        {/* Date Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Test Date</label>
          <input
            type="date"
            value={testDate}
            onChange={(e) => {
              setTestDate(e.target.value);
              setError("");
            }}
            className="w-11/12 max-w-[60%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`block mx-auto w-60 py-2 px-4 text-white rounded-md font-semibold transition ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Loading..." : "View Report"}
        </button>
      </form>

      {reports && (
        <div className="mt-8">
          <h2 className="text-center text-lg font-medium mb-4">Available Reports</h2>
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{report.name}</p>
                  <p className="text-green-600 text-sm">{report.status}</p>
                </div>
                <button
                  onClick={() => handleView(report.name)}
                  className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
