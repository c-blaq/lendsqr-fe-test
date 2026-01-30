import { Outlet } from "react-router-dom";
import "./scss/dashboard.scss";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { useState } from "react";

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Header onMenuClick={() => setIsSidebarOpen((prev) => !prev)} />

      <div className="dashboard-body">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
