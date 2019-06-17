import React from "react";

import style from "./login.scss";

interface ILoginInput {
  id?: string;
  label?: string;
  value: string;
  onChange: any;
}

const LoginInput: React.FC<ILoginInput> = ({ label, ...rest }) => {
  return (
    <div className={style.login__form__field}>
      <label>{label}</label>
      <input type="text" {...rest} />
    </div>
  );
};

export default LoginInput;
