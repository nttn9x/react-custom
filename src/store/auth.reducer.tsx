import { Record } from "immutable";

const SET_USER = "SET_USER";

interface AuthProps {
  username: string;
  fullname: string;
}

const authRecord: AuthProps = {
  username: "",
  fullname: "",
};

class AuthState extends Record(authRecord) implements AuthProps {
  public readonly username!: string;
  public readonly fullname!: string;

  constructor(params?: AuthProps) {
    params ? super(params) : super();
  }
}

const initialState = new AuthState({ username: "", fullname: "" });

export interface SetUserAction {
  type: typeof SET_USER;
  payload: {
    username: string;
  };
}

type AuthTypes = SetUserAction;

export function auth(state = initialState, action: AuthTypes): AuthState {
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
