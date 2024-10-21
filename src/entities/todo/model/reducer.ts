import { Todo } from "./model";
import { Reducer } from "react";
import { TODOS_KEY } from "./consts";

export enum TodoAction {
  ADD = "ADD",
  TOGGLE = "TOGGLE",
  REMOVE = "REMOVE",
}

export interface TodosAction {
  type: TodoAction;
  todoTask?: string;
  todoId?: number;
}

export const todosReducer: Reducer<Todo[], TodosAction> = (tasks, action) => {
  switch (action.type) {
    case TodoAction.ADD: {
      if (!action.todoTask) {
        throw Error("No task provided");
      }

      return [
        ...tasks,
        {
          id: tasks.length + 1,
          task: action.todoTask,
          completed: false,
        },
      ];
    }
    case TodoAction.TOGGLE: {
      if (!action.todoId) {
        throw Error("No task id provided");
      }

      return tasks.map((task) =>
        task.id === action.todoId
          ? { ...task, completed: !task.completed }
          : task
      );
    }
    case TodoAction.REMOVE: {
      if (!action.todoId) {
        throw Error("No task id provided");
      }

      return tasks.filter((task) => task.id !== action.todoId);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const addTodo = (todoTask: string) => ({
  type: TodoAction.ADD,
  todoTask,
});

export const toggleTodo = (todoId: number) => ({
  type: TodoAction.TOGGLE,
  todoId,
});

export const removeTodo = (todoId: number) => ({
  type: TodoAction.REMOVE,
  todoId,
});

export const initialState: Todo[] = JSON.parse(
  localStorage.getItem(TODOS_KEY) || "[]"
);
