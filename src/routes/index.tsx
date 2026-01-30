import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";

import Login from "@/pages/login/login";
import Dashboard from "@/pages/dashboard/dashboard";
import Users from "@/pages/users/users";
import UserDetails from "@/pages/users/user-details";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import ComingSoon from "@/pages/coming-soon/coming-soon";
import NotFound from "@/pages/not-found/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.LOGIN} replace />,
      },

      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTES.LOGIN,
            element: <Login />,
          },
        ],
      },

      {
        element: <DashboardLayout />,
        children: [
          {
            path: ROUTES.DASHBOARD,
            element: <Dashboard />,
          },
          {
            path: ROUTES.USERS,
            element: <Users />,
          },
          {
            path: ROUTES.USER_DETAILS,
            element: <UserDetails />,
          },
          {
            path: ROUTES.COMING_SOON,
            element: <ComingSoon />,
          },
        ],
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
