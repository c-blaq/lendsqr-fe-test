import { createBrowserRouter } from "react-router";
import { ROUTES } from "./routes";

import Login from "@/pages/login/login";
import Dashboard from "@/pages/dashboard/dashboard";
import Users from "@/pages/users/users";
import UserDetails from "@/pages/users/user-details";
import { RootLayout } from "@/layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <RootLayout />,
    children: [
      {
        index: true,
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
