import React, { useMemo } from "react";

import LayoutComponent from "./login-layout.component";
import InputComponent from "./login-input.component";

import { useFormInput, IFormInput } from "./login.use";

const Login: React.FC = () => {
  const usename: IFormInput = useFormInput();
  const password: IFormInput = useFormInput();

  return (
    <LayoutComponent>
      {useMemo(
        () => (
          <InputComponent {...usename} />
        ),
        [usename.value],
      )}
      {useMemo(
        () => (
          <InputComponent {...password} />
        ),
        [password.value],
      )}
    </LayoutComponent>
  );
};

export default Login;
