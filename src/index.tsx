import "./utils/support-old-browsers.util";

import React from "react";
import ReactDOM from "react-dom";
import Route from "./routes/index.route";

import "./styles/index.scss";

function generateUI(): void {
  const root: HTMLElement = document.createElement("div");
  root.id = "xtcroot";

  document.body.append(root);

  ReactDOM.render(<Route />, root);
}

// this is a magic
generateUI();
