import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import AuthReducer from "../../store/auth.reducer";

const PrivateRoute: React.SFC<RouteProps> = ({ component: Component, routes, ...rest }: any) => (
  <Route
    {...rest}
    render={props => {
      if (!AuthReducer.isAuthenticated) {
        return (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        );
      }

      return <Component {...props} routes={routes} />;
    }}
  />
);

export default PrivateRoute;
