import { FC } from "react";
import { Todo as TodoModel } from "../../model/model";
import styles from "./list-todo.module.scss";

interface ListTodoProps {
  todos: TodoModel[];
  render: (todo: TodoModel, i: number) => JSX.Element;
  reverse?: boolean;
}
export const ListTodo: FC<ListTodoProps> = ({ todos, render, reverse }) => {
  return (
    <div className={styles.listTodo}>
      {(reverse ? todos.reverse() : todos).map((todo, i) => render(todo, i))}
    </div>
  );
};
