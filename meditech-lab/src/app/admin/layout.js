// src/app/admin/layout.js
import Sidebar from "./Components/Sidebar"; // Corrected path to Components
import { getServerSession } from "next-auth"; // NEW: Import getServerSession
import { authOptions } from "../api/auth/[...nextauth]/route"; // NEW: Import your auth options
import { redirect } from "next/navigation"; // NEW: Import redirect for server-side redirection

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin panel for managing the medical laboratory",
};

export default async function AdminLayout({ children }) {
  // MODIFIED: Make this an async function
  const session = await getServerSession(authOptions); // NEW: Get the server session

  // Check if there's a session and if the user has the 'admin' role
  // If not, redirect them to the login page
  if (!session || session.user.role !== "admin") {
    redirect("/auth/login"); // Redirect to your login page
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  );
}
