export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <nav className="space-y-2">
          <a
            href="/admin/tests"
            className="block hover:bg-gray-700 p-2 rounded"
          >
            Tests
          </a>
          <a
            href="/admin/laboratory-network"
            className="block hover:bg-gray-700 p-2 rounded"
          >
            Laboratory Network
          </a>
          <a
            href="/admin/services"
            className="block hover:bg-gray-700 p-2 rounded"
          >
            Services
          </a>
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
