import { computed, effect, signal } from "@preact/signals-react";
import {
  getTodosFromLocalStorage,
  setTodosToLocalStorage,
} from "../local-storage/todos-local";

export const todosSignal = signal(getTodosFromLocalStorage());

effect(() => {
  setTodosToLocalStorage(todosSignal.value);
});

export const completedTodoCount = computed(
  () => todosSignal.value.filter((todo) => todo.isDone).length,
);
