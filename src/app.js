import { TasksBoard } from "./scripts/tasks-board";

const tasksBoard = new TasksBoard({
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

// setInterval(() => {
//   tasksBoard.addList({ name: new Date().toLocaleTimeString()});
// }, 2000); 
