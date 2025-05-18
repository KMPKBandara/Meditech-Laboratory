// meditech-lab/src/app/admin/layout.jsx
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin panel for managing the medical laboratory",
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  );
}
