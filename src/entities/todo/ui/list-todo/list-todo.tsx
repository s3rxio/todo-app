import { FC } from "react";
import { Todo as TodoModel } from "../../model/model";
import styles from "./list-todo.module.scss";

interface ListTodoProps {
  todos: TodoModel[];
  render: (todo: TodoModel, i: number) => JSX.Element;
  reverse?: boolean;
  onlyActive?: boolean;
  onlyCompleted?: boolean;
}
export const ListTodo: FC<ListTodoProps> = ({
  todos,
  render,
  reverse,
  onlyActive,
  onlyCompleted,
}) => {
  let handledTodos = [...todos];

  if (onlyActive) {
    handledTodos = todos.filter((todo) => !todo.completed);
  } else if (onlyCompleted) {
    handledTodos = todos.filter((todo) => todo.completed);
  }
  if (reverse) {
    handledTodos = handledTodos.reverse();
  }
  return (
    <div className={styles.listTodo}>
      {handledTodos.map((todo, i) => render(todo, i))}
    </div>
  );
};
