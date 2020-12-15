"use strict";

import Task from "./task.js";

export default class TasksList {
  constructor ({ ul, form, tasks }){
    this.ul = ul;
    this.form = form;
    this.tasks = tasks;
  
    this.init();
  }
  
  init (){  
    this.form.addEventListener("submit", (event) => {
      const input = event.target.querySelector("[name=name]");
  
      event.preventDefault();
      
      if (input.value) {
        this.addTask({ name: input.value });
  
        input.value = "";
      }
    });
  
    this.tasks.forEach((task) => {
      this.addTask(task);
    });

    this.deleteTask();

    this.checkTask();
  }

  deleteTask(){
    this.ul.addEventListener("click", (event) => {  
      const btn = event.target.closest("[data-button]");
  
      if (btn) {
        btn.closest("[data-list-item]").remove();
      }
    });
  }

  checkTask(){
    this.ul.addEventListener("click", (event) => {  
      const check = event.target.closest("[data-checkbox]");
  
      if (check && input.value) {
        this.name.style.textDecoration = line-through;
      }
    });
  }

  addTask ({ name }){
    const task = new Task({ name });
    console.log(this)
  
    this.ul.insertAdjacentHTML("afterbegin", task.getHTML());
    
  }
}