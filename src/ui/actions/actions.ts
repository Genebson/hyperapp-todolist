import IState from "../state/state";
import { Action } from "hyperapp";

export const AddTask: Action<IState> = (state) =>
  !state.value
    ? state
    : {
        ...state,
        value: "",
        tasks: (state.tasks as string[]).concat(state.value),
        done: [false, ...state.done],
      };

export const NewValue: Action<IState, any> = (state, e) => ({
  ...state,
  value: e.target.value,
});

export const RemoveTask: Action<IState, number> = (state, index) => {
  let tasks = [...state.tasks];
  let done = [...state.done];
  tasks.splice(index, 1);
  done.splice(index, 1);
  return { ...state, tasks, done };
};

export const ToggleDone: Action<IState, number> = (state, index) => {
  let done = [...state.done];
  done[index] = !done[index];
  return { ...state, done };
};

export const HandleEnterKey: Action<IState, KeyboardEvent> = (state, e) => {
  if (e.key !== "Enter") return state;
  return AddTask;
};
