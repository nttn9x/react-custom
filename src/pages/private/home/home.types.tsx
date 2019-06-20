import { Dispatch } from "react";
import { Record, List } from "immutable";

export const ADD_TODO = "ADD_TODO";

interface ITodoProps {
  tasks: List<string>;
}

const todoRecord: ITodoProps = {
  tasks: List(),
};

export class ITodoState extends Record(todoRecord) {}

// -------------------------------------------

export interface IAddTodoAction {
  type: typeof ADD_TODO;
  payload: {
    taskName: string;
  };
}

export type TodoTypes = IAddTodoAction;

// -------------------------------------------

export interface ITodoContext {
  state?: any;
  dispatch?: Dispatch<IAddTodoAction>;
  actions?: any;
}
