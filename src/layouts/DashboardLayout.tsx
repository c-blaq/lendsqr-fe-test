import { Outlet } from "react-router-dom";
import "./scss/dashboard.scss";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Header />

      <div className="dashboard-body">
        <Sidebar />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
