import {
  Todo,
  AddTodo,
  useTodos,
  ListTodo,
  FilterHandler,
  useTodosDispatch,
  clearCompleted,
} from "@/entities/todo";
import styles from "./todos.module.scss";
import { useCallback, useState } from "react";
import clsx from "clsx";

enum Filter {
  Active = "active",
  Completed = "completed",
  None = "none",
}

export const Todos = () => {
  const { todos } = useTodos();
  const { dispatch } = useTodosDispatch();
  const [filter, setFilter] = useState<Filter>(Filter.None);
  const activeCount = todos.filter((todo) => !todo.completed).length;

  const onlyActiveFilter = useCallback<FilterHandler>(
    (todo) => !todo.completed,
    []
  );

  const onlyCompletedFilter = useCallback<FilterHandler>(
    (todo) => todo.completed,
    []
  );

  const filterMap = {
    [Filter.Active]: onlyActiveFilter,
    [Filter.Completed]: onlyCompletedFilter,
    [Filter.None]: null,
  };

  return (
    <div className={styles.todos}>
      <AddTodo className={styles.todos__addTodo} />
      <ListTodo
        todos={todos}
        reverse
        render={(todo, i) => (
          <Todo key={i} todo={todo} className={styles.todos__item} />
        )}
        filter={filterMap[filter]}
        className={styles.todos__list}
      />

      <div className={styles.todos__footer}>
        <p>{activeCount} items left</p>
        <div className={styles.todos__filters}>
          <button
            className={clsx(styles.todos__button)}
            disabled={filter === Filter.None}
            onClick={() => setFilter(Filter.None)}
          >
            All
          </button>
          <button
            className={clsx(styles.todos__button)}
            disabled={filter === Filter.Active}
            onClick={() => setFilter(Filter.Active)}
          >
            Active
          </button>
          <button
            className={clsx(styles.todos__button)}
            disabled={filter === Filter.Completed}
            onClick={() => setFilter(Filter.Completed)}
          >
            Completed
          </button>
        </div>
        <button
          className={styles.todos__clear}
          onClick={() => dispatch(clearCompleted())}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};
