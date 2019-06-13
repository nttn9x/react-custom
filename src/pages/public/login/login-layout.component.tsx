import React from "react";
import PropTypes from "prop-types";

import style from "./login.scss";

const LoginLayout: React.SFC = ({ children }) => {
  return (
    <div className={style.login}>
      <div className={style.login__form}>{children}</div>
    </div>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.node,
};

export default LoginLayout;
