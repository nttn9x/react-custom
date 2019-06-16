import { useReducer, useEffect } from "react";
import { ChangeEvent } from "react";
import { History } from "history";

interface IState {
  username: string;
  password: string;
  isLogin: boolean;
}

type TAction =
  | { type: "CHANGE_USERNAME"; payload: { value: string } }
  | { type: "CHANGE_PASSWORD"; payload: { value: string } }
  | { type: "IS_LOGIN"; payload: { isLogin: boolean } };

const initState: IState = {
  username: "",
  password: "",
  isLogin: false,
};

const loginReducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return { ...state, username: action.payload.value };
    case "CHANGE_PASSWORD":
      return { ...state, password: action.payload.value };
    case "IS_LOGIN":
      return { ...state, isLogin: action.payload.isLogin };
    default:
      return state;
  }
};

export const useRedux = (history: History): [IState, any] => {
  const [state, dispatch] = useReducer(loginReducer, initState);

  const changeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "CHANGE_USERNAME", payload: { value: e.target.value } });
  const changePassword = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "CHANGE_PASSWORD", payload: { value: e.target.value } });

  const doLogin = async () => {
    dispatch({ type: "IS_LOGIN", payload: { isLogin: true } });

    return await setTimeout(() => {
      dispatch({ type: "IS_LOGIN", payload: { isLogin: false } });

      history.push("/home");
    }, 2000);
  };

  const actions = {
    changeUsername,
    changePassword,
    doLogin,
  };

  return [state, actions];
};

export const useFieldInput = () => {
  useEffect(() => {
    const node = document.getElementById("ip-username");
    if (node) {
      node.focus();
    }
  }, []);
};
