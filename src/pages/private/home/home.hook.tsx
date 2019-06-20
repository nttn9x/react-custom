import { useReducer } from "react";
import { ADD_TODO, ITodoState, TodoTypes } from "./home.types";

const initialState = new ITodoState();

function reducer(state = initialState, action: TodoTypes) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO: {
      return state.update("tasks", tasks => tasks.push(payload.taskName));
    }
    default:
      return state;
  }
}

export function useOwnRedux() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function doAddTodo(taskName: string) {
    dispatch({ type: ADD_TODO, payload: { taskName } });
  }

  return {
    state,
    dispatch,
    actions: {
      doAddTodo,
    },
  };
}
