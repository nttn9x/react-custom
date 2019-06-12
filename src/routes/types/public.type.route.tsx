import React from "react";
import { Route, RouteProps } from "react-router-dom";

const PublicRoute: React.SFC<RouteProps> = (props: any) => <Route {...props} />;

export default PublicRoute;
