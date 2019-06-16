import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ListPrivateRoutes from "./privates";
import ListPublicRoutes from "./publics";
import PrivateTypeRoute from "./types/private.type.route";
import PublicTypeRoute from "./types/public.type.route";

import LayoutComponent from "../component/layout/layout.component";

const Root: React.FC = () => {
  return (
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
  );
};

export default Root;
