/* Model */
export { TodosProvider } from "./model/provider";
export type { TodosProviderProps } from "./model/provider";

export { useTodos, useTodosDispatch } from "./model/hooks";
export { addTodo, toggleTodo, removeTodo } from "./model/reducer";

/* UI */
export { Todo } from "./ui/todo/todo";
export { AddTodo } from "./ui/add-todo/add-todo";
export { ListTodo } from "./ui/list-todo/list-todo";
export type { FilterHandler } from "./ui/list-todo/list-todo";
