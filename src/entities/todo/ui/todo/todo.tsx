import { AllHTMLAttributes, FC, useId } from "react";
import styles from "./todo.module.scss";
import { Todo as TodoModel } from "../../model/model";
import { useTodosDispatch } from "../../model/hooks";
import { removeTodo, toggleTodo } from "../../model/reducer";
import clsx from "clsx";

interface TodoProps extends AllHTMLAttributes<HTMLDivElement> {
  todo: TodoModel;
}
export const Todo: FC<TodoProps> = ({ todo, className, ...props }) => {
  const { dispatch } = useTodosDispatch();
  const completedCheckbox = useId();

  return (
    <div className={clsx(styles.todo, className)} {...props}>
      <label htmlFor={completedCheckbox} className={styles.todo__label}></label>

      <input
        type="checkbox"
        id={completedCheckbox}
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className={styles.todo__checkbox}
      />
      <p
        className={clsx(
          styles.todo__task,
          todo.completed && styles.todo__task_completed
        )}
      >
        {todo.task}
      </p>

      <button
        className={styles.todo__remove}
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        &times;
      </button>
    </div>
  );
};
