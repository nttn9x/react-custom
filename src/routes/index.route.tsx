import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ListPrivateRoutes from "./privates";
import ListPublicRoutes from "./publics";
import PrivateTypeRoute from "./types/private.type.route";
import PublicTypeRoute from "./types/public.type.route";

import LayoutComponent from "../component/layout/layout.component";

import { Provider } from "react-redux";

import store from "../store/index.store";

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <LayoutComponent>
        <Router>
          <Suspense fallback={<div>Loading</div>}>
            {ListPublicRoutes.map((route, i) => (
              <PublicTypeRoute key={i} {...route} />
            ))}
            {ListPrivateRoutes.map((route, i) => (
              <PrivateTypeRoute key={i} {...route} />
            ))}
          </Suspense>
        </Router>
      </LayoutComponent>
    </Provider>
  );
};

export default Root;
