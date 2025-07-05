'use client';
import Link from 'next/link';
import { signOut } from "next-auth/react";

export default function Sidebar() {

  const handleLogout = async () => {
    // You can specify a redirect URL here, e.g., '/auth/login'
    // If not specified, it defaults to the sign-in page defined in authOptions
    await signOut({ callbackUrl: "/auth/login" });
  };

  return (
    <aside className="w-64 h-screen bg-gray-100 p-6 shadow-md">
      <nav>
        <ul className="space-y-4">
          <li><Link href="/admin/tests/categories">Add Test Category</Link></li>
          <li><Link href="/admin/tests/create">Add Test</Link></li>
          <li><Link href="/admin/branches/create">Add Branch</Link></li>
          <li><Link href="/admin/collection-centers/create">Add Collection Center</Link></li>
          <li><Link href="/admin/services/create">Add Service</Link></li>
          <li><Link href="/admin/tips/create">Add Tip</Link></li>
          <li><Link href="/admin/reports/upload">Add Report</Link></li>
          <li><button
              onClick={handleLogout}
              className="cursor-pointer"
            >
              Logout
            </button></li>
        </ul>
      </nav>
    </aside>
  );
}
