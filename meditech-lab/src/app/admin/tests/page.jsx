'use client';

import { useState } from 'react';

export default function TestPage() {
  const [tests, setTests] = useState([]);
  const [newTest, setNewTest] = useState({ name: '', description: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewTest({ ...newTest, [e.target.name]: e.target.value });
  };

  const addTest = () => {
    if (editingIndex !== null) {
      const updatedTests = [...tests];
      updatedTests[editingIndex] = newTest;
      setTests(updatedTests);
      setEditingIndex(null);
    } else {
      setTests([...tests, newTest]);
    }
    setNewTest({ name: '', description: '' });
  };

  const editTest = (index) => {
    setNewTest(tests[index]);
    setEditingIndex(index);
  };

  const deleteTest = (index) => {
    const updatedTests = tests.filter((_, i) => i !== index);
    setTests(updatedTests);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Test Management</h2>

      <div className="mb-6 space-y-4">
        <input
          type="text"
          name="name"
          value={newTest.name}
          onChange={handleInputChange}
          placeholder="Test Name"
          className="border rounded px-3 py-2 w-full"
        />
        <textarea
          name="description"
          value={newTest.description}
          onChange={handleInputChange}
          placeholder="Test Description"
          className="border rounded px-3 py-2 w-full"
          rows={3}
        ></textarea>
        <button
          onClick={addTest}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingIndex !== null ? 'Update Test' : 'Add Test'}
        </button>
      </div>

      <div className="space-y-4">
        {tests.map((test, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <h4 className="font-semibold">{test.name}</h4>
              <p className="text-sm text-gray-600">{test.description}</p>
            </div>
            <div className="space-x-2 mt-3 md:mt-0">
              <button
                onClick={() => editTest(index)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTest(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
