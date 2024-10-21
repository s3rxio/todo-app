import { FC, FormEvent, FormHTMLAttributes, useState } from "react";
import { useTodosDispatch } from "../../model/hooks";
import { addTodo } from "../../model/reducer";
import styles from "./add-todo.module.scss";
import clsx from "clsx";

export type AddTodoProps = FormHTMLAttributes<HTMLFormElement>;

export const AddTodo: FC<AddTodoProps> = ({ className, ...props }) => {
  const { dispatch } = useTodosDispatch();
  const [task, setTask] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task || isDisabled) {
      return;
    }

    setIsDisabled(true);

    dispatch(addTodo(task));
    setTask("");
    setIsDisabled(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(styles.addTodo, className)}
      {...props}
    >
      <input
        type="text"
        value={task}
        placeholder="What needs to be done?"
        onChange={(e) => setTask(e.target.value)}
        className={styles.addTodo__input}
        disabled={isDisabled}
      />
    </form>
  );
};
