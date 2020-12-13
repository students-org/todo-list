import Task from "./task";

export default function TasksList ({ ul, form, tasks }) {
  this.ul = ul;
  this.form = form;
  this.tasks = tasks;

  this.init();
}

TasksList.prototype.init = function(){
  document.addEventListener("click", (event) => {  
    const btn = event.target.closest("[data-button]");

    if (btn) {
      btn.closest("[data-list-item]").remove();
    }
  });
  
  this.form.addEventListener("submit", (event) => {
    const input = event.target.querySelector("[name=name]");

    event.preventDefault();
    
    if (input.value) {
      this.addTask({ name: input.value });

      input.value = "";
    }
  });

  this.tasks.forEach(this.addTask);
};

TasksList.prototype.addTask = function({ name }){
  const task = new Task({ name });

  this.ul.insertAdjacentHTML("afterbegin", task.getHTML());
};