'use client';

import { useEffect, useState } from 'react';
import { RefreshCw, Edit, Trash2, FlaskConical, DollarSign, Tag } from 'lucide-react'; // Added icons

export default function TestPage() {
  const [activeTab, setActiveTab] = useState('add');
  const [tests, setTests] = useState([]);
  const [categories, setCategories] = useState([]); // To store test categories
  const [form, setForm] = useState({ name: '', description: '', price: '', category: '' });
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all tests
  const fetchTests = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/tests');
      if (res.ok) {
        const data = await res.json();
        setTests(data);
      } else {
        const errorData = await res.json();
        setError(errorData.message || 'Failed to load tests.');
      }
    } catch (err) {
      console.error("Error fetching tests:", err);
      setError('Failed to load tests. Network error or invalid JSON response.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch all categories for the dropdown
  const fetchCategoriesForDropdown = async () => {
    try {
      const res = await fetch('/api/admin/testcategories');
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      } else {
        console.error("Failed to load categories for dropdown:", await res.json());
      }
    } catch (err) {
      console.error("Error fetching categories for dropdown:", err);
    }
  };

  // Submit form (add or edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editMode ? 'PUT' : 'POST';
    const url = editMode ? `/api/admin/tests/${editingId}` : '/api/admin/tests';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, price: parseFloat(form.price) }), // Ensure price is a number
      });

      if (res.ok) {
        alert(editMode ? 'Test updated successfully!' : 'Test added successfully!');
        fetchTests(); // Refresh list
        setForm({ name: '', description: '', price: '', category: '' });
        setEditMode(false);
        setEditingId(null);
        setActiveTab('view'); // Switch to view tab
      } else {
        const errorData = await res.json();
        alert(`Failed to submit test: ${errorData.message || 'Unknown error'}`);
        console.error("API Submission Error:", errorData);
      }
    } catch (err) {
      console.error("Frontend Submission Error:", err);
      alert('Error submitting test.');
    }
  };

  // Delete test
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this test?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/admin/tests/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        alert('Test deleted successfully!');
        fetchTests(); // Refresh list
      } else {
        const errorData = await res.json();
        alert(`Failed to delete test: ${errorData.message || 'Unknown error'}`);
        console.error("API Deletion Error:", errorData);
      }
    } catch (err) {
      console.error("Frontend Deletion Error:", err);
      alert('Error deleting test.');
    }
  };

  // Edit test
  const handleEdit = (test) => {
    setForm({
      name: test.name,
      description: test.description,
      price: test.price,
      category: test.category?._id || '', // Use _id for category when editing
    });
    setEditingId(test._id);
    setEditMode(true);
    setActiveTab('add'); // Switch to the form tab
  };

  useEffect(() => {
    fetchCategoriesForDropdown(); // Fetch categories when component mounts
  }, []);

  useEffect(() => {
    if (activeTab === 'view') fetchTests();
  }, [activeTab]);


  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => {
            setActiveTab('add');
            setForm({ name: '', description: '', price: '', category: '' });
            setEditMode(false);
            setEditingId(null);
          }}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'add' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          {editMode ? 'Edit Test' : 'Add Test'}
        </button>
        <button
          onClick={() => setActiveTab('view')}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'view' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          View Tests
        </button>
      </div>

      {/* Add/Edit Form */}
      {activeTab === 'add' && (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">{editMode ? 'Edit Test' : 'Add New Test'}</h2>

          <input
            type="text"
            placeholder="Test Name"
            className="w-full border rounded p-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Description (Optional)"
            className="w-full border rounded p-2"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows="3"
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full border rounded p-2"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
            min="0"
            step="0.01"
          />
          <select
            className="w-full border rounded p-2"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            {editMode ? 'Update Test' : 'Create Test'}
          </button>
        </form>
      )}

      {/* View Tests */}
      {activeTab === 'view' && (
        <div className="bg-white rounded shadow border border-gray-200">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">All Tests</h2>
            <button
              onClick={fetchTests}
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
              <button onClick={fetchTests} className="ml-2 underline text-sm">
                Retry
              </button>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
                <tr>
                  <th className="px-6 py-3">Test Name</th>
                  <th className="px-6 py-3">Details</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {tests.map((test) => (
                  <tr key={test._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium flex items-center gap-2">
                        <FlaskConical className="w-4 h-4 text-gray-500" />
                        {test.name}
                      </div>
                      <div className="text-sm text-gray-500">{test.description}</div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3" /> {parseFloat(test.price).toFixed(2)}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Tag className="w-3 h-3" /> {test.category?.name || 'N/A'}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => handleEdit(test)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="w-4 h-4 inline" />
                      </button>
                      <button
                        onClick={() => handleDelete(test._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
                {tests.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                      No tests found.
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