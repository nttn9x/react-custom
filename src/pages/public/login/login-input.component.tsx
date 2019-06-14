import React from "react";

import style from "./login.scss";

interface ILoginInput {
  label?: string;
  value: string;
  onChange: any;
}

const LoginInput: React.FC<ILoginInput> = ({ label, ...rest }) => {
  console.log({ label, ...rest });
  return (
    <div className={style.login__form__field}>
      <label>{label}</label>
      <input type="text" {...rest} />
    </div>
  );
};

export default LoginInput;
