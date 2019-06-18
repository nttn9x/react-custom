import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
// import { isAccesTokenStillAlive } from "../../utils/Authentication";

const PrivateRoute: React.SFC<RouteProps> = ({ component: Component, routes, ...rest }: any) => (
  <Route
    {...rest}
    render={props => {
      if (true) {
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
