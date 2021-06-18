import { lazy } from "react";

export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() => import("../pages/homePage/HomePage")),
  },
  {
    path: "/movies",
    name: "MoviesPage",
    exact: true,
    component: lazy(() => import("../pages/moviesPage/MoviesPage")),
  },
  {
    path: "/movies/:moviesId",
    name: null,
    exact: false,
    component: lazy(() => import("../pages/movieDetailsPage/MovieDetailsPage")),
  },
  {
    path: "",
    name: null,
    exact: false,
    component: lazy(() => import("../pages/notFound/NotFound")),
  },
];
