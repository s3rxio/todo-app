import { TodosProvider } from "../entities/todo";
import { Todos } from "../widget/todos";
import styles from "./app.module.scss";

export const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__container}>
        <h1 className={styles.app__title}>todos</h1>
        <TodosProvider>
          <Todos />
        </TodosProvider>
      </div>
    </div>
  );
};
