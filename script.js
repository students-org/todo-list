const tasksListEl = document.querySelector("[data-todo]");

const tasks = [
  {
    name: "Learn Java Script"
  }
];

class TasksList {
  constructor ({ ul, form, tasks }){
    this.ul = ul;
    this.form = form;
    this.tasks = tasks;
  
    this.init();
  }
  
  init (){
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
  }

  addTask ({ name }){
    const task = new Task({ name });
  
    this.ul.insertAdjacentHTML("afterbegin", task.getHTML());
  }
}

class Task {
  constructor({ name = '' }){
    this.name = name;
  }
  
  getHTML(){
    return `
      <li data-list-item class="todo-list__item"> 
        <span class="todo-list__text">${this.name}</span> 
        <button data-button class="btn">
          <i class="fas fa-trash-alt"></i>
        </button> 
      </li>
    `;
  }
}



// TODOs.forEach((tasksList) => {
//   new TasksList({ 
//     ul: tasksList.querySelector("[data-list]"),
//     form: tasksList.querySelector("[data-form]")
//   });
// });

const tasksList = new TasksList({ 
  ul: tasksListEl.querySelector("[data-list]"),
  form: tasksListEl.querySelector("[data-form]"),
  tasks 
});