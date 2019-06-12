import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const Home = lazy(() => import("../../pages/home/home.component"));

const About = lazy(() => import("../../pages/about/about.component"));

const routes: RouteProps[] = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
];

export default routes;
