"use client";

import { useState } from "react";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({ title: "", details: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!formData.title) return;
    const newService = { ...formData, id: Date.now() };
    setServices([...services, newService]);
    setFormData({ title: "", details: "" });
  };

  const handleDelete = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Manage Services</h2>
      <div className="space-y-2 mb-6">
        <input
          type="text"
          name="title"
          placeholder="Service Title"
          value={formData.title}
          onChange={handleChange}
          className="border rounded px-2 py-1 w-full"
        />
        <input
          type="text"
          name="details"
          placeholder="Service Details"
          value={formData.details}
          onChange={handleChange}
          className="border rounded px-2 py-1 w-full"
        />
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Service
        </button>
      </div>
      <div className="space-y-2">
        {services.map((service) => (
          <div key={service.id} className="border p-2 rounded flex justify-between">
            <div>
              <p className="font-bold">{service.title}</p>
              <p className="text-sm text-gray-600">{service.details}</p>
            </div>
            <button
              onClick={() => handleDelete(service.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}