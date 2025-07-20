'use client';

import { useEffect, useState } from 'react';
import { RefreshCw, Edit, Trash2, Tag, BookOpenText } from 'lucide-react'; // Added icons

export default function TestCategoryPage() {
  const [activeTab, setActiveTab] = useState('add');
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: '', description: '' });
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all categories
  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/testcategories');
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      } else {
        const errorData = await res.json();
        setError(errorData.message || 'Failed to load test categories.');
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError('Failed to load test categories. Network error or invalid JSON response.');
    } finally {
      setLoading(false);
    }
  };

  // Submit form (add or edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editMode ? 'PUT' : 'POST';
    const url = editMode ? `/api/admin/testcategories/${editingId}` : '/api/admin/testcategories';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert(editMode ? 'Test Category updated successfully!' : 'Test Category added successfully!');
        fetchCategories(); // Refresh list
        setForm({ name: '', description: '' });
        setEditMode(false);
        setEditingId(null);
        setActiveTab('view'); // Switch to view tab
      } else {
        const errorData = await res.json();
        alert(`Failed to submit category: ${errorData.message || 'Unknown error'}`);
        console.error("API Submission Error:", errorData);
      }
    } catch (err) {
      console.error("Frontend Submission Error:", err);
      alert('Error submitting test category.');
    }
  };

  // Delete category
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this test category? Deleting a category might affect associated tests.');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/admin/testcategories/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        alert('Test Category deleted successfully!');
        fetchCategories(); // Refresh list
      } else {
        const errorData = await res.json();
        alert(`Failed to delete category: ${errorData.message || 'Unknown error'}`);
        console.error("API Deletion Error:", errorData);
      }
    } catch (err) {
      console.error("Frontend Deletion Error:", err);
      alert('Error deleting test category.');
    }
  };

  // Edit category
  const handleEdit = (category) => {
    setForm(category);
    setEditingId(category._id);
    setEditMode(true);
    setActiveTab('add'); // Switch to the form tab
  };

  useEffect(() => {
    if (activeTab === 'view') fetchCategories();
  }, [activeTab]);

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => {
            setActiveTab('add');
            setForm({ name: '', description: '' });
            setEditMode(false);
            setEditingId(null);
          }}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'add' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          {editMode ? 'Edit Category' : 'Add Category'}
        </button>
        <button
          onClick={() => setActiveTab('view')}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'view' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          View Categories
        </button>
      </div>

      {/* Add/Edit Form */}
      {activeTab === 'add' && (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">{editMode ? 'Edit Test Category' : 'Add New Test Category'}</h2>

          <input
            type="text"
            placeholder="Category Name"
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

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            {editMode ? 'Update Category' : 'Create Category'}
          </button>
        </form>
      )}

      {/* View Categories */}
      {activeTab === 'view' && (
        <div className="bg-white rounded shadow border border-gray-200">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">All Test Categories</h2>
            <button
              onClick={fetchCategories}
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
              <button onClick={fetchCategories} className="ml-2 underline text-sm">
                Retry
              </button>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
                <tr>
                  <th className="px-6 py-3">Category Name</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {categories.map((category) => (
                  <tr key={category._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium flex items-center gap-2"><Tag className="w-4 h-4 text-gray-500" />{category.name}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                         <BookOpenText className="w-4 h-4 text-gray-500" />
                         {category.description || 'No description'}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => handleEdit(category)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="w-4 h-4 inline" />
                      </button>
                      <button
                        onClick={() => handleDelete(category._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
                {categories.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                      No test categories found.
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