"use client";

import { useState } from 'react';

export default function LabNetworkPage() {
  const [branches, setBranches] = useState([]);
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const dummyCenters = ['Center A', 'Center B', 'Center C', 'Center D'];
  const [selectedCenters, setSelectedCenters] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddBranch = () => {
    const newBranch = {
      id: Date.now(),
      ...form,
      collectingCenters: selectedCenters,
    };
    setBranches([...branches, newBranch]);
    setForm({ name: '', address: '', phone: '', email: '' });
    setSelectedCenters([]);
    setShowDropdown(false);
  };

  const handleDelete = (id) => {
    setBranches(branches.filter((branch) => branch.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add New Branch</h2>
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

          {/* Collection Centers Dropdown */}
          <div className="relative col-span-2">
            <div
              className="border p-2 rounded flex justify-between items-center cursor-pointer bg-white"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="text-gray-600">
                {selectedCenters.length > 0
                  ? selectedCenters.join(', ')
                  : 'Add Collection Center'}
              </span>
              <span className="text-xl font-bold text-blue-600">+</span>
            </div>
            {showDropdown && (
              <ul className="absolute bg-white border rounded mt-1 w-full z-10">
                {dummyCenters.map((center) => (
                  <li
                    key={center}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      if (!selectedCenters.includes(center)) {
                        setSelectedCenters([...selectedCenters, center]);
                      }
                    }}
                  >
                    {center}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <button
          onClick={handleAddBranch}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* Table to show branches */}
      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left p-2">Branch Name</th>
            <th className="text-left p-2">Address</th>
            <th className="text-left p-2">Phone</th>
            <th className="text-left p-2">Email</th>
            <th className="text-left p-2">Collection Centers</th>
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
              <td className="p-2">{branch.collectingCenters.join(', ')}</td>
              <td className="p-2 space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded">
                  Edit
                </button>
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
