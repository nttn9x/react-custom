import React, { useMemo } from "react";

import Button from "@material-ui/core/Button";

import LayoutComponent from "./login-layout.component";
import InputComponent from "./login-input.component";

import { useRedux, useFieldInput } from "./login.hook";

import { useTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { History } from "history";

interface ILoginProps {
  history: History;
}

const Login: React.FC<ILoginProps> = ({ history }) => {
  const [state, actions] = useRedux(history);
  const { username, password, isLogin } = state;

  useFieldInput();

  const { t } = useTranslation(["common"]);

  return (
    <LayoutComponent>
      <h1>HELLO</h1>
      {useMemo(
        () => (
          <InputComponent id={"ip-username"} label={t("username")} value={username} onChange={actions.changeUsername} />
        ),
        [state.username],
      )}
      {useMemo(
        () => (
          <InputComponent label={t("password")} value={password} onChange={actions.changePassword} />
        ),
        [state.password],
      )}
      <Button disabled={isLogin} variant="contained" fullWidth={true} onClick={actions.doLogin}>
        Login
      </Button>
    </LayoutComponent>
  );
};

export default withRouter(Login);
