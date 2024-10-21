import { AllHTMLAttributes, FC } from "react";
import { Todo as TodoModel } from "../../model/model";
import styles from "./list-todo.module.scss";
import clsx from "clsx";

export type FilterHandler = (todo: TodoModel, i: number) => boolean;

interface ListTodoProps extends AllHTMLAttributes<HTMLDivElement> {
  todos: TodoModel[];
  render: (todo: TodoModel, i: number) => JSX.Element;
  reverse?: boolean;
  filter?: FilterHandler | null;
}

export const ListTodo: FC<ListTodoProps> = ({
  todos,
  render,
  reverse,
  filter,
  className,
  ...props
}) => {
  let handledTodos = [...todos];

  if (filter) {
    handledTodos = todos.filter(filter);
  }
  if (reverse) {
    handledTodos = handledTodos.reverse();
  }

  return (
    <div className={clsx(styles.listTodo, className)} {...props}>
      {handledTodos.map((todo, i) => render(todo, i))}
    </div>
  );
};
