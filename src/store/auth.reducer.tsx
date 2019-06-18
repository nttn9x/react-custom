import { fromJS } from "immutable";

const SET_USER = "SET_USER";

const initialState = fromJS({ username: "", fullname: "" });

export interface SetUserAction {
  type: typeof SET_USER;
  payload: {
    username: string;
  };
}

type AuthTypes = SetUserAction;

export function auth(state = initialState, action: AuthTypes) {
  switch (action.type) {
    case SET_USER: {
      return state.merge({
        ...action.payload,
      });
    }
    default:
      return state;
  }
}
