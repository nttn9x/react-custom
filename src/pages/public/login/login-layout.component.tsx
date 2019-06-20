import React from "react";

import style from "./login.scss";

const LoginLayout: React.FC = ({ children }) => {
  return (
    <div className={style.login}>
      <div className={style.login__form}>{children}</div>
    </div>
  );
};

export default LoginLayout;
