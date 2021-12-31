// export const HandlerEnterKey = (state, event) => ({
//   ...state,
//   key: event.target.value,
// });

export const AddTask = (state) =>
  !state.value
    ? state
    : {
        ...state,
        value: "",
        tasks: state.tasks.concat(state.value),
        done: [false, ...state.done],
      };

export const NewValue = (state, e) => ({
  ...state,
  value: e.target.value,
});

export const RemoveTask = (state, i) => {
  let tasks = [...state.tasks];
  let done = [...state.done];
  tasks.splice(i, 1);
  done.splice(i, 1);
  return { ...state, tasks, done };
};

export const ToggleDone = (state, index) => {
  let done = [...state.done];
  done[index] = !done[index];
  return { ...state, done };
};

export const HandleEnterKey = (state, e) => {
  if (e.key !== "Enter") return state;
  return AddTask;
};
