import React, { Suspense } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import ListPrivateRoutes from "./privates";
import PrivateTypeRoute from "./types/private.type.route";

import LayoutComponent from "../component/layout/layout.component";

const Root: React.SFC = () => {
    return (
        <LayoutComponent>
            <Router>
                <Link to="/home">home</Link>
                <Link to="/about">About</Link>

                <Suspense fallback={<div>l</div>}>
                    {/* {ListPublicRoutes.map((route, i) => (
                    <PublicTypeRoute key={i} {...route} />
                ))} */}
                    {ListPrivateRoutes.map((route, i) => (
                        <PrivateTypeRoute key={i} {...route} />
                    ))}
                </Suspense>
            </Router>
        </LayoutComponent>
    );
};

export default Root;
