'use client';

import { useState } from 'react';

export default function UploadReport() {
  const [form, setForm] = useState({
    name: '',
    patientId: '',
    email: '',
  });
  const [pdfFile, setPdfFile] = useState(null);
  const [uploadedPath, setUploadedPath] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', form.name);
    data.append('patientId', form.patientId);
    data.append('email', form.email);
    if (pdfFile) {
      data.append('pdf', pdfFile);
    }

    const res = await fetch('/api/admin/reports', {
      method: 'POST',
      body: data,
    });

    const result = await res.json();

    if (res.ok) {
      alert('Report uploaded!');
      setUploadedPath(result.pdfPath); // Save PDF path
      setForm({ name: '', patientId: '', email: '' });
      setPdfFile(null);
    } else {
      alert('Error uploading report');
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Upload Report (PDF)</h1>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          type="text"
          placeholder="Patient Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Patient ID"
          value={form.patientId}
          onChange={e => setForm({ ...form, patientId: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="file"
          accept="application/pdf"
          onChange={e => setPdfFile(e.target.files?.[0])}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Upload Report
        </button>
      </form>

      {uploadedPath && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">View Uploaded PDF:</h2>
          <a
            href={uploadedPath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Open PDF Report
          </a>
        </div>
      )}
    </div>
  );
}
