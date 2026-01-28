import { Outlet } from "react-router";

export function RootLayout() {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}
