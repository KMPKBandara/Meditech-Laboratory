"use client";

import { useState } from "react";

export default function TipsPage() {
  const [tips, setTips] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!formData.title) return;
    const newTip = { ...formData, id: Date.now() };
    setTips([...tips, newTip]);
    setFormData({ title: "", content: "" });
  };

  const handleDelete = (id) => {
    setTips(tips.filter((tip) => tip.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Health Tips</h2>
      <div className="space-y-2 mb-6">
        <input
          type="text"
          name="title"
          placeholder="Tip Title"
          value={formData.title}
          onChange={handleChange}
          className="border rounded px-2 py-1 w-full"
        />
        <textarea
          name="content"
          placeholder="Tip Content"
          value={formData.content}
          onChange={handleChange}
          className="border rounded px-2 py-1 w-full"
        />
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Tip
        </button>
      </div>
      <div className="space-y-2">
        {tips.map((tip) => (
          <div key={tip.id} className="border p-2 rounded flex justify-between">
            <div>
              <p className="font-bold">{tip.title}</p>
              <p className="text-sm text-gray-600">{tip.content}</p>
            </div>
            <button
              onClick={() => handleDelete(tip.id)}
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
