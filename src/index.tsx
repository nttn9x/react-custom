import "./utils/support-old-browsers.util";

import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import Route from "./routes/index.route";
import "./i18n";

function generateUI(): void {
  const root: HTMLElement = document.createElement("div");
  root.id = "xtcroot";

  document.body.append(root);

  ReactDOM.render(<Route />, root);
}

// this is a magic
generateUI();
