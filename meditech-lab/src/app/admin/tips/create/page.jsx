'use client';

import { useState } from 'react';
import FormInput from '../../../../components/admin/FormInput';

export default function CreateTip() {
  const [form, setForm] = useState({
    title: '',
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/admin/tips', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (res.ok) {
      alert('Tip created!');
      setForm({ title: '', description: '' });
    } else {
      alert('Error creating tip');
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Add New Tip</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Tip Title"
          name="title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          placeholder="Enter tip title"
        />
        <div>
          <label htmlFor="description" className="block font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            placeholder="Enter description"
            rows={4}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Tip
        </button>
      </form>
    </div>
  );
}
