import { FC } from "react";
import { Todo as TodoModel } from "../../model/model";
import styles from "./list-todo.module.scss";

interface ListTodoProps {
  todos: TodoModel[];
  render: (todo: TodoModel, i?: number) => JSX.Element;
}
export const ListTodo: FC<ListTodoProps> = ({ todos, render }) => {
  return (
    <div className={styles.listTodo}>
      {todos.map((todo, i) => render(todo, i))}
    </div>
  );
};
