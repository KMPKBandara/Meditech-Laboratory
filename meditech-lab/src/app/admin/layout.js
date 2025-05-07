"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function AdminLayout({ children }) {
  const [testOpen, setTestOpen] = useState(false);
  const [labOpen, setLabOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>

        <nav className="space-y-2">
          {/* Tests Dropdown */}
          <div>
            <button
              className="w-full flex justify-between items-center p-2 rounded hover:bg-gray-700"
              onClick={() => setTestOpen(!testOpen)}
            >
              <span>Tests</span>
              {testOpen ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>
            {testOpen && (
              <div className="ml-4 space-y-1">
                <a
                  href="/admin/tests/add-category"
                  className="block hover:bg-gray-700 p-2 rounded text-sm"
                >
                  Add Test Category
                </a>
                <a
                  href="/admin/tests/add"
                  className="block hover:bg-gray-700 p-2 rounded text-sm"
                >
                  Add Test
                </a>
              </div>
            )}
          </div>

          {/* Laboratory Network Dropdown */}
          <div>
            <button
              className="w-full flex justify-between items-center p-2 rounded hover:bg-gray-700"
              onClick={() => setLabOpen(!labOpen)}
            >
              <span>Laboratory Network</span>
              {labOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {labOpen && (
              <div className="ml-4 space-y-1">
                <a
                  href="/admin/laboratory-network/add-branch"
                  className="block hover:bg-gray-700 p-2 rounded text-sm"
                >
                  Add Branch
                </a>
                <a
                  href="/admin/laboratory-network/add-collection-center"
                  className="block hover:bg-gray-700 p-2 rounded text-sm"
                >
                  Add Collection Center
                </a>
              </div>
            )}
          </div>

          {/* Services */}
          <a
            href="/admin/services"
            className="block hover:bg-gray-700 p-2 rounded"
          >
            Services
          </a>

          {/* Health Tips */}
          <a href="/admin/tips" className="block hover:bg-gray-700 p-2 rounded">
            Health Tips
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">{children}</main>
    </div>
  );
}
