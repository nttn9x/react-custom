import { useReducer } from "react";
import { ChangeEvent } from "react";

const CHANGE_USERNAME = "change_username";
const CHANGE_PASSWORD = "change_password";

interface IState {
  username: string;
  password: string;
  isLogging: boolean;
}

type TAction =
  | { type: typeof CHANGE_USERNAME; payload: { value: string } }
  | { type: typeof CHANGE_PASSWORD; payload: { value: string } };

const initState: IState = {
  username: "",
  password: "",
  isLogging: false,
};

const loginReducer = (state: IState, { type, payload }: TAction): IState => {
  switch (type) {
    case CHANGE_USERNAME:
      return { ...state, username: payload.value };
    case CHANGE_PASSWORD:
      return { ...state, password: payload.value };
    default:
      return state;
  }
};

export const useRedux = (): [IState, any] => {
  const [state, dispatch] = useReducer(loginReducer, initState);

  const actions: any = {
    changeUsername: (e: ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: CHANGE_USERNAME, payload: { value: e.target.value } }),
    changePassword: (e: ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: CHANGE_PASSWORD, payload: { value: e.target.value } }),
  };

  return [state, actions];
};
