const TODOs = document.querySelectorAll("[data-todo]");

 function createToDo ( {ul, form } ) {
  function addTask(name) {
    ul.insertAdjacentHTML("afterbegin", 
    `
      <li data-list-item class="todo-list__item"> 
        <span class="todo-list__text">${name}</span> 
  
        <button data-button class="btn">
          <i class="fas fa-trash-alt"></i>
        </button> 
      </li>
    ` 
    );
  }

  (function listenDeleteTodo() {
    document.addEventListener("click", (event) => {  
      const btn = event.target.closest("[data-button]");
  
      if (btn) {
        btn.closest("[data-list-item]").remove();
      }
    });
  })();
  
  form.addEventListener("submit", (event) => {
    const input = event.target.querySelector("[name=name]");

    event.preventDefault();
    
    if (input.value) {
      addTask(input.value);
      input.value = "";
    }
  });
}

TODOs.forEach((tasksList) => {
  createToDo({ 
    ul: tasksList.querySelector("[data-list]"),
    form: tasksList.querySelector("[data-form]")
  });
});


