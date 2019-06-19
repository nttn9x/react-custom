<<<<<<< HEAD
const auth = {
  isAuthenticated: false,
  authenticate(cb: any) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: any) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export default auth;
=======
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
>>>>>>> 604ffa3931eb2427be59f497a26bac74566af723
