import { createContext } from "react";
import { ITodoContext } from "./home.types";

export const TodoContext = createContext<ITodoContext>({});
