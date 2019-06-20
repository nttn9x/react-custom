import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const Home = lazy(() => import("../../pages/private/home/home.container"));

const About = lazy(() => import("../../pages/private/about/about.component"));

const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

export default routes;
