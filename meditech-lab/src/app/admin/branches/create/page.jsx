'use client';

import { useEffect, useState } from 'react';
import { RefreshCw, Edit, Trash2, Building2, MapPin, Mail, Phone } from 'lucide-react';

export default function BranchPage() {
  const [activeTab, setActiveTab] = useState('add');
  const [branches, setBranches] = useState([]);
  const [form, setForm] = useState({ name: '', address: '', phone: '', email: '' });
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all branches
  const fetchBranches = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/branches');
      // Always check if res.ok and then parse JSON
      if (res.ok) {
        const data = await res.json();
        setBranches(data);
      } else {
        const errorData = await res.json(); // Try to parse error message if available
        setError(errorData.message || 'Failed to load branches.');
      }
    } catch (err) {
      console.error("Error fetching branches:", err);
      setError('Failed to load branches. Network error or invalid JSON response.');
    } finally {
      setLoading(false);
    }
  };

  // Submit form (add or edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editMode ? 'PUT' : 'POST';
    // Frontend URL for PUT/DELETE needs the ID appended
    const url = editMode ? `/api/admin/branches/${editingId}` : '/api/admin/branches';

    try {
        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            alert(editMode ? 'Branch updated successfully!' : 'Branch added successfully!');
            fetchBranches(); // Refresh list
            setForm({ name: '', address: '', phone: '', email: '' });
            setEditMode(false);
            setEditingId(null);
            setActiveTab('view'); // Switch to view tab
        } else {
            const errorData = await res.json();
            alert(`Failed to submit branch: ${errorData.message || 'Unknown error'}`);
            console.error("API Submission Error:", errorData);
        }
    } catch (err) {
        console.error("Frontend Submission Error:", err);
        alert('Error submitting branch.');
    }
  };

  // Delete branch
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this branch?');
    if (!confirmDelete) return;

    try {
      // Corrected URL: Include the ID directly in the URL for the dynamic route
      const res = await fetch(`/api/admin/branches/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        // No need to send ID in the body anymore for DELETE
      });

      if (res.ok) {
        alert('Branch deleted successfully!');
        fetchBranches(); // Refresh list
      } else {
        const errorData = await res.json();
        alert(`Failed to delete branch: ${errorData.message || 'Unknown error'}`);
        console.error("API Deletion Error:", errorData);
      }
    } catch (err) {
      console.error("Frontend Deletion Error:", err);
      alert('Error deleting branch.');
    }
  };

  // Edit branch
  const handleEdit = (branch) => {
    setForm(branch);
    setEditingId(branch._id);
    setEditMode(true);
    setActiveTab('add'); // Switch to the form tab
  };

  useEffect(() => {
    if (activeTab === 'view') fetchBranches();
  }, [activeTab]);


  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => {
            setActiveTab('add');
            setForm({ name: '', address: '', phone: '', email: '' });
            setEditMode(false);
            setEditingId(null); // Clear editing ID when switching to add mode
          }}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'add' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          {editMode ? 'Edit Branch' : 'Add Branch'}
        </button>
        <button
          onClick={() => setActiveTab('view')}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'view' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          View Branches
        </button>
      </div>

      {/* Add/Edit Form */}
      {activeTab === 'add' && (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">{editMode ? 'Edit Branch' : 'Add New Branch'}</h2>

          <input
            type="text"
            placeholder="Branch Name"
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

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            {editMode ? 'Update Branch' : 'Create Branch'}
          </button>
        </form>
      )}

      {/* View Branches */}
      {activeTab === 'view' && (
        <div className="bg-white rounded shadow border border-gray-200">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">All Branches</h2>
            <button
              onClick={fetchBranches}
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
              <button onClick={fetchBranches} className="ml-2 underline text-sm">
                Retry
              </button>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
                <tr>
                  <th className="px-6 py-3">Branch</th>
                  <th className="px-6 py-3">Contact</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {branches.map((branch) => (
                  <tr key={branch._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium">{branch.name}</div>
                      <div className="text-sm text-gray-500">{branch.address}</div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div>{branch.phone}</div>
                      <div className="text-gray-500">{branch.email}</div>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => handleEdit(branch)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="w-4 h-4 inline" />
                      </button>
                      <button
                        onClick={() => handleDelete(branch._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
                {branches.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                      No branches found.
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