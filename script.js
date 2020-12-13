import TasksList from "./tasksList";
import Task from "./task";

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



