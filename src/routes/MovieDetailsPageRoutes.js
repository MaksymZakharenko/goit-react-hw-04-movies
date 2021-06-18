import { lazy } from "react";

export const movieDetailsPageRoutes = [
  {
    path: "/cast",
    name: "Cast",
    exact: false,
    component: lazy(() => import("../pages/cast/Cast")),
  },
  {
    path: "/reviews",
    name: "Reviews",
    exact: false,
    component: lazy(() => import("../pages/reviews/Reviews")),
  },
];
