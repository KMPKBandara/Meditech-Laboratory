'use client';

import { useEffect, useState } from 'react';
import { RefreshCw, Edit, Trash2 } from 'lucide-react';

export default function CreateCollectionCenter() {
  const [activeTab, setActiveTab] = useState('add');
  const [branches, setBranches] = useState([]);
  const [collectionCenters, setCollectionCenters] = useState([]);
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    branchId: '', // to store selected branch id
  });
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch branches for dropdown
  const fetchBranches = async () => {
    try {
      const res = await fetch('/api/admin/branches');
      const text = await res.text();
      const data = text ? JSON.parse(text) : [];
      setBranches(data);
    } catch (err) {
      console.error('Failed to load branches:', err);
    }
  };

  // Fetch all collection centers for view tab
  const fetchCollectionCenters = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/collection-centers');
      const text = await res.text();
      const data = text ? JSON.parse(text) : [];
      setCollectionCenters(data);
    } catch (err) {
      setError('Failed to load collection centers.');
    } finally {
      setLoading(false);
    }
  };

  // Submit form (add or edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.branchId) {
      alert('Please select a branch.');
      return;
    }

    console.log("Frontend Form Data being sent:", form); // <-- ADD THIS LINE
    console.log("Frontend branchId type:", typeof form.branchId); // <-- AND THIS ONE

    const method = editMode ? 'PUT' : 'POST';
    const url = editMode
      ? `/api/admin/collection-centers/${editingId}`
      : '/api/admin/collection-centers';

      console.log("Frontend: handleSubmit - editMode =", editMode);   // <-- ADD THIS LOG
      console.log("Frontend: handleSubmit - editingId =", editingId); // <-- ADD THIS LOG
      console.log("Frontend: handleSubmit - Constructed URL =", url); // <-- ADD THIS LOG
      console.log("Frontend: handleSubmit - Form data being sent:", form); // <-- ADD THIS LOG

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const data = await res.json();
      alert(editMode ? 'Collection Center updated!' : 'Collection Center created!');
      fetchCollectionCenters();
      setForm({ name: '', address: '', phone: '', email: '', branchId: '' });
      setEditMode(false);
      setEditingId(null);
      fetchCollectionCenters();
      setActiveTab('view');
    } else {
      const errorData = await res.json();
      alert('Failed to submit collection center');
      console.error("API Error:", errorData);
    }
  };

  // Delete collection center
  const handleDelete = async (id) => {
  // Add a confirmation dialog for better UX
  if (!window.confirm("Are you sure you want to delete this collection center?")) {
    return; // User cancelled the deletion
  }

  try {
    // CORRECTED URL: Include the ID directly in the URL for the dynamic route
    const res = await fetch(`/api/admin/collection-centers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      // You don't need to send the ID in the body anymore since it's in the URL
      // body: JSON.stringify({ id }), // <-- REMOVE THIS LINE
    });

    if (res.ok) {
      alert('Collection Center deleted successfully!');
      fetchCollectionCenters(); // Refresh the list after deletion
    } else {
      const errorData = await res.json();
      alert(`Deletion failed: ${errorData.message || 'Unknown error'}`);
      console.error("API Delete Error:", errorData);
    }
  } catch (err) {
    console.error("Frontend Delete Error:", err);
    alert('Error deleting collection center.');
  }
};

  // Edit collection center
const handleEditClick = (centerToEdit) => {
  setEditMode(true);
  setEditingId(centerToEdit._id); // This line is crucial. Ensure centerToEdit._id is actually populated.
  setForm({
    name: centerToEdit.name,
    address: centerToEdit.address,
    phone: centerToEdit.phone,
    email: centerToEdit.email,
    branchId: centerToEdit.branchId,
  });
  setActiveTab('add');
  console.log("Frontend: handleEditClick - Editing ID set to:", centerToEdit._id); // <-- ADD THIS LOG
  console.log("Frontend: handleEditClick - Form pre-populated with:", form); // <-- ADD THIS LOG (might show old state due to async setForm, but useful)
};

  useEffect(() => {
    fetchBranches();
  }, []);

  useEffect(() => {
    if (activeTab === 'view') fetchCollectionCenters();
  }, [activeTab]);

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => {
            setActiveTab('add');
            setForm({ name: '', address: '', phone: '', email: '', branchId: '' });
            setEditMode(false);
            setEditingId(null);
          }}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'add' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          {editMode ? 'Edit Collection Center' : 'Add Collection Center'}
        </button>
        <button
          onClick={() => setActiveTab('view')}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'view' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          View Collection Centers
        </button>
      </div>

      {/* Add/Edit Form */}
      {activeTab === 'add' && (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow max-w-xl">
          <h2 className="text-xl font-semibold mb-4">
            {editMode ? 'Edit Collection Center' : 'Add New Collection Center'}
          </h2>

          <input
            type="text"
            placeholder="Center Name"
            className="w-full border rounded p-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full border rounded p-2"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full border rounded p-2"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded p-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          {/* Branch dropdown */}
          <select
            className="w-full border rounded p-2"
            value={form.branchId}
            onChange={(e) => setForm({ ...form, branchId: e.target.value })}
            required
          >
            
            <option value="">
              Select Branch
            </option>
            {branches.map((branch) => (
              <option key={branch._id} value={branch._id}>
                {branch.name}
              </option>
              
            ))}
          </select>
          

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            {editMode ? 'Update Collection Center' : 'Create Collection Center'}
          </button>
        </form>
      )}

      {/* View Collection Centers */}
      {activeTab === 'view' && (
        <div className="bg-white rounded shadow border border-gray-200">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">All Collection Centers</h2>
            <button
              onClick={fetchCollectionCenters}
              disabled={loading}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>

          {error && (
            <div className="p-4 text-red-600">
              {error}
              <button onClick={fetchCollectionCenters} className="ml-2 underline text-sm">
                Retry
              </button>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
                <tr>
                  <th className="px-6 py-3">Center</th>
                  <th className="px-6 py-3">Contact</th>
                  <th className="px-6 py-3">Branch</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {collectionCenters.map((center) => {
                  const branchName =
                    branches.find((b) => b._id === center.branchId)?.name || 'N/A';
                  return (
                    <tr key={center._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium">{center.name}</div>
                        <div className="text-sm text-gray-500">{center.address}</div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div>{center.phone}</div>
                        <div className="text-gray-500">{center.email}</div>
                      </td>
                      <td className="px-6 py-4">{branchName}</td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          onClick={() => handleEditClick(center)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit className="w-4 h-4 inline" />
                        </button>
                        <button
                          onClick={() => handleDelete(center._id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-4 h-4 inline" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {collectionCenters.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                      No collection centers found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
