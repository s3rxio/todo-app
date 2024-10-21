import { Todo, AddTodo, useTodos, ListTodo } from "@/entities/todo";
import styles from "./todos.module.scss";

export const Todos = () => {
  const { todos } = useTodos();

  return (
    <div className={styles.todos}>
      <AddTodo className={styles.todos__addTodo} />
      <ListTodo
        todos={todos.reverse()}
        render={(todo, i) => (
          <Todo key={todo.id + i} todo={todo} className={styles.todos__todo} />
        )}
      />
    </div>
  );
};
