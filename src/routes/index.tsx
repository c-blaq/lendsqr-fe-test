import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";

import Login from "@/pages/login/login";
import Dashboard from "@/pages/dashboard/dashboard";
import Users from "@/pages/users/users";
import UserDetails from "@/pages/users/user-details";
import { RootLayout } from "@/layouts/RootLayout";
import { AuthLayout } from "@/layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
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
    element: <RootLayout />,
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
    ],
  },
]);
