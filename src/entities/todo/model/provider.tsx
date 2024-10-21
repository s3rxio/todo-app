import { FC, useEffect, useReducer } from "react";
import { TodosContext, TodosDispatchContext } from "./context";
import { initialState, todosReducer } from "./reducer";
import { TODOS_KEY } from "./storage";

export interface TodosProviderProps {
  children: React.ReactNode;
}

export const TodosProvider: FC<TodosProviderProps> = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, initialState);

  useEffect(() => {
    const saveTodos = () => {
      localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    };

    window.addEventListener("blur", saveTodos);
    window.addEventListener("beforeunload", saveTodos);

    return () => {
      window.removeEventListener("blur", saveTodos);
      window.removeEventListener("beforeunload", saveTodos);
    };
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
      }}
    >
      <TodosDispatchContext.Provider value={{ dispatch }}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};
