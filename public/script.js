import { TasksBoard } from "./tasks-board.js";

window.tasksBoard = new TasksBoard({
  rootEl: document.querySelector("[data-tasks-board]"),
  lists: [
    {
      name: 'My first tasks list',
      tasks: [
        {
          name: "Learn Java Script",
          isDone: false
        }
      ]
    }
  ]
});
