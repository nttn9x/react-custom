import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

let theme: Theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

theme = responsiveFontSizes(theme);

const Layout: React.SFC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
