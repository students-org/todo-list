import Task from "./task";

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
  
    this.tasks.forEach(this.addTask);

    deleteTask();

    checkTask();
  }

  deleteTask(){
    document.addEventListener("click", (event) => {  
      const btn = event.target.closest("[data-button]");
  
      if (btn) {
        btn.closest("[data-list-item]").remove();
      }
    });
  }

  checkTask(){
    document.addEventListener("click", (event) => {  
      const check = event.target.closest("[data-checkbox]");
  
      if (check && input.value) {
        this.name.style.textDecoration = line-through;
      }
    });
  }

  addTask ({ name }){
    const task = new Task({ name });
  
    this.ul.insertAdjacentHTML("afterbegin", task.getHTML());
  }
}