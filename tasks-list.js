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
        this.addTask(
          {
            name: input.value,
          });

  
        input.value = "";
      }
    });
  
    // this.tasks.forEach((task) => {
    //   this.addTask(task);
    // });

    this.deleteTask();

    this.checkTask();
  }

  deleteTask(){
    this.ul.addEventListener("click", (event) => {  
      const btn = event.target.closest("[data-button]");
  
      if (btn) {
        btn.closest("[data-task]").remove();
      }
    });
  }

  checkTask(){
    this.ul.addEventListener("click", (event) => {  
      const checkboxEl = event.target.closest("[data-checkbox]");
     
      // if (check && input.value) {
      //   this.name.style.textDecoration = lineThrought;
      // }
    });
  }

  addTask ({ name }){
    const task = new Task(
      { 
        ul: this.ul,
        tasks: [
          {
            id: Math.random(),
            name: name,
            isDone: false
          }
        ],
        getHTML: function(props){
          return `
            <li class="todo-list__item" data-task=${props.tasks.id} > 
              <input class="todo-form__checkbox" data-checkbox type="checkbox" checked=${props.tasks.isDone}">
              <span class="todo-list__text">${props.tasks.name}</span> 
              <button class="btn" data-button>
                <i class="fas fa-trash-alt"></i>
              </button> 
            </li>
          `;
        }
      
      }
    );
    
    task.render();
    
  }
}