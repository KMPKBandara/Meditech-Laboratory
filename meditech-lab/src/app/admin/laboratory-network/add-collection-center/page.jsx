"use client";

import { useState } from 'react';

export default function AddCollectionCenterPage() {
  const [centers, setCenters] = useState([]);
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddCenter = () => {
    const newCenter = {
      id: Date.now(),
      ...form,
    };
    setCenters([...centers, newCenter]);
    setForm({ name: '', address: '', phone: '', email: '' });
  };

  const handleDelete = (id) => {
    setCenters(centers.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add Collection Center</h2>
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Center Name"
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
        </div>

        <button
          onClick={handleAddCenter}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left p-2">Center Name</th>
            <th className="text-left p-2">Address</th>
            <th className="text-left p-2">Phone</th>
            <th className="text-left p-2">Email</th>
            <th className="text-left p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {centers.map((center) => (
            <tr key={center.id} className="border-t">
              <td className="p-2">{center.name}</td>
              <td className="p-2">{center.address}</td>
              <td className="p-2">{center.phone}</td>
              <td className="p-2">{center.email}</td>
              <td className="p-2 space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(center.id)}
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
