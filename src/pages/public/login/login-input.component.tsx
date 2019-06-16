import React from "react";

import style from "./login.scss";

import Typography from "@material-ui/core/Typography";

interface ILoginInput {
  id?: string;
  label?: string;
  value: string;
  onChange: any;
}

const LoginInput: React.FC<ILoginInput> = ({ label, ...rest }) => {
  return (
    <div className={style.login__form__field}>
      <Typography component="label" variant="subtitle1" gutterBottom>
        {label}
      </Typography>
      <input type="text" {...rest} />
    </div>
  );
};

export default LoginInput;
