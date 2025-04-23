"use client";

import { useState } from 'react';

export default function LabNetworkPage() {
  const [branches, setBranches] = useState([]);
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    collectingCenters: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddBranch = () => {
    const newBranch = {
      id: Date.now(),
      ...form,
      collectingCenters: form.collectingCenters.split(',').map((c) => c.trim()),
    };
    setBranches([...branches, newBranch]);
    setForm({ name: '', address: '', phone: '', email: '', collectingCenters: '' });
  };

  const handleDelete = (id) => {
    setBranches(branches.filter(branch => branch.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add new Branch</h2>
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Branch Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="collectingCenters"
            placeholder="Collecting Centers (comma separated)"
            value={form.collectingCenters}
            onChange={handleChange}
            className="col-span-2 border p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddBranch}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left p-2">Branch Name</th>
            <th className="text-left p-2">Address</th>
            <th className="text-left p-2">Phone</th>
            <th className="text-left p-2">Email</th>
            <th className="text-left p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch) => (
            <tr key={branch.id} className="border-t">
              <td className="p-2">{branch.name}</td>
              <td className="p-2">{branch.address}</td>
              <td className="p-2">{branch.phone}</td>
              <td className="p-2">{branch.email}</td>
              <td className="p-2 space-x-2">
                <button className="bg-gray-200 px-3 py-1 rounded">View</button>
                <button
                  onClick={() => handleDelete(branch.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}