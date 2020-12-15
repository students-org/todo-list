import TasksList from "./tasksList.js";
import Task from "./task.js";

const tasksListEl = document.querySelector("[data-todo]");

const tasks = [
  {
    name: "Learn Java Script"
  }
];

const tasksList = new TasksList({ 
  ul: tasksListEl.querySelector("[data-list]"),
  form: tasksListEl.querySelector("[data-form]"),
  tasks 
});

tasksList.init();