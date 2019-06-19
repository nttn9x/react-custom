import React, { useMemo, useEffect } from "react";

import Button from "@material-ui/core/Button";

import LayoutComponent from "./login-layout.component";
import InputComponent from "./login-input.component";

import { useFormInput, useButton } from "./login.hook";

import { useTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { History } from "history";

interface ILoginProps {
  history: History;
}

const Login: React.FC<ILoginProps> = ({ history }) => {
  const username = useFormInput();
  const password = useFormInput();
  const button = useButton(history);

  const { t } = useTranslation(["common"]);

  useEffect(() => {
    const node = document.getElementById("ip-username");
    if (node) {
      node.focus();
    }
  }, []);

  return (
    <LayoutComponent>
      <h1>HELLO</h1>
      {useMemo(
        () => (
          <InputComponent id={"ip-username"} label={t("username")} {...username} />
        ),
        [username.value],
      )}
      {useMemo(
        () => (
          <InputComponent label={t("password")} {...password} />
        ),
        [password.value],
      )}
      <Button disabled={button.isProcessing} variant="contained" fullWidth={true} onClick={button.onClick}>
        Login
      </Button>
    </LayoutComponent>
  );
};

export default withRouter(Login);
