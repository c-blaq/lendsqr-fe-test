export const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  USERS: "/users",
  USER_DETAILS: "/users/:id",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
