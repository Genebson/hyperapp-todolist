import { app } from "hyperapp";
import html from "hyperlit";
import IState from "./ui/state/state";
import {
  ToggleDone,
  AddTask,
  NewValue,
  HandleEnterKey,
  RemoveTask,
} from "./ui/actions/actions";

const baseState: IState = {
  tasks: [],
  value: "",
  done: [],
};

app({
  init: [baseState],
  view: (state) => html`
    <div id="app">
      <h1 class="todo-list title">To-Do List</h1>
      <div className="todo-list container">
        <input
          class="todo-list input"
          id="todo-list-input"
          type="text"
          placeholder="Type your task"
          oninput=${NewValue}
          value=${state.value}
          onkeypress=${HandleEnterKey}
        />
        <button id="todo-list-btn-add" onclick=${AddTask}>Add Task</button>
      </div>
      <div className="todo-list item-list">
        <ul>
          ${state.tasks.map(
            (task, index) => html`<li class="todo-list task" id="task-${index}">
              <input
                type="checkbox"
                id="todo-list-input-check"
                class="todo-list input-check"
                checked=${state.done[index]}
                oninput=${[ToggleDone, index]}
              />
              <span
                class=${state.done[index]
                  ? "todo-list task-done"
                  : "todo-list task-not-done"}
                >${task}</span
              >
              <span
                id="delete-task${index}"
                class=${state.done[index] === true
                  ? "todo-list delete-task-active"
                  : "todo-list delete-task"}
                onclick=${[RemoveTask, index]}
                >❌</span
              >
            </li>`,
          )}
        </ul>
      </div>
    </div>
  `,
  node: document.getElementById("app")!,
});
