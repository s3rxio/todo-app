import { createContext, Dispatch } from "react";
import { Todo } from "./model";
import { TodosAction } from "./reducer";

interface TodosContext {
  todos: Todo[];
}

interface TodosDispatchContext {
  dispatch: Dispatch<TodosAction>;
}

export const TodosContext = createContext({} as TodosContext);
export const TodosDispatchContext = createContext({} as TodosDispatchContext);
