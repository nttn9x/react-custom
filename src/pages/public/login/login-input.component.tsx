import React from "react";

interface ILoginInput {
  value: string;
  onChange: any;
}

const LoginInput: React.FC<ILoginInput> = props => {
  return <input type="text" {...props} />;
};

export default LoginInput;
