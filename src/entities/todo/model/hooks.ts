import { useContext } from "react";
import { TodosContext, TodosDispatchContext } from "./context";

export function useTodos() {
  return useContext(TodosContext);
}

export function useTodosDispatch() {
  return useContext(TodosDispatchContext);
}
