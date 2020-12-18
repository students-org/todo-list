"use strict";

import TasksList from "./tasks-list.js";
import Task from "./task.js";

const tasksListEl = document.querySelector("[data-todo]");

const tasks = [
  {
    id: Math.random(),
    name: "Learn Java Script",
    isDone: true
  }
];

const tasksList = new TasksList({ 
  ul: tasksListEl.querySelector("[data-list]"),
  form: tasksListEl.querySelector("[data-form]"),
  tasks 
});
