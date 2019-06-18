import { createStore } from "redux";
import { Map } from "immutable";

import rootReducer from "./root.reducer";

const initialState = Map();

const store = createStore(rootReducer, initialState);

export default store;
