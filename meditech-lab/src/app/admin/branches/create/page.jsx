'use client';

import { useState } from 'react';
import FormInput from '../../components/FormInput';

export default function CreateBranch() {
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/admin/branches', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (res.ok) {
      alert('Branch created!');
      setForm({ name: '', address: '', phone: '', email: '' });
    } else {
      alert('Error creating branch');
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Add New Branch</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Branch Name"
          name="name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder="Enter branch name"
        />
        <FormInput
          label="Address"
          name="address"
          value={form.address}
          onChange={e => setForm({ ...form, address: e.target.value })}
          placeholder="Enter address"
        />
        <FormInput
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          placeholder="Enter phone number"
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          placeholder="Enter email"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Branch
        </button>
      </form>
    </div>
  );
}
