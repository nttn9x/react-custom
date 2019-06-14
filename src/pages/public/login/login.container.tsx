import React, { useMemo } from "react";

import Button from "@material-ui/core/Button";

import LayoutComponent from "./login-layout.component";
import InputComponent from "./login-input.component";

import { useRedux } from "./login.use";

import { useTranslation } from "react-i18next";

const Login: React.FC = () => {
  // const usename: IFormInput = useFormInput();
  // const password: IFormInput = useFormInput();

  const [state, actions] = useRedux();

  const { t } = useTranslation(["common"]);

  return (
    <LayoutComponent>
      <h1>HELLO</h1>
      {useMemo(
        () => (
          <InputComponent label={t("username")} value={state.username} onChange={actions.changeUsername} />
        ),
        [state.username],
      )}
      {useMemo(
        () => (
          <InputComponent label={t("password")} value={state.password} onChange={actions.changePassword} />
        ),
        [state.password],
      )}
      <Button variant="contained" color="primary" fullWidth={true}>
        Login
      </Button>
    </LayoutComponent>
  );
};

export default Login;
