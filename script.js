const TODOs = document.querySelectorAll("[data-todo]");

function Task (ul, name){
  this.ul = todo.querySelector("[data-list]");
  this.name = name;
  this.listenDeleteTodo();
}

Task.prototype.getList = function(){
  this.ul.insertAdjacentHTML("afterbegin", 
  `
    <li data-list-item class="todo-list__item"> 
      <span class="todo-list__text">${this.name}</span> 

      <button data-button class="btn">
        <i class="fas fa-trash-alt"></i>
      </button> 
    </li>
  ` 
  );
};

Task.prototype.listenDeleteTodo = function(){
  document.addEventListener("click", (event) => {  
    const btn = event.target.closest("[data-button]");

    if (btn) {
      btn.closest("[data-list-item]").remove();
    }
  });
};

function ToDoList ( form ){
 this.form = todo.querySelector("[data-form]")
}

ToDoList.prototype.addTask = function(){
  this.form.addEventListener("submit", (event) => {
    const input = event.target.querySelector("[name=name]");

    event.preventDefault();
    
    if (input.value) {
      let task = new Task;
      task.getList();
      input.value = "";
    }
  });
};

TODOs.forEach((todo) => {
  let list = new ToDoList();
  list.addTask();
});