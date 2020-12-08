const input = document.querySelector(".todo-input");
const ul = document.querySelector("ul.todo-list");
const form = document.querySelector(".todo");

function createTodo() {
  ul.insertAdjacentHTML("afterbegin", 
  `
    <li data-list-item class="todo-list-item"> 
      <span class="todo-list-item-text">${input.value}</span> 

      <button data-button class="todo-list-item-trash">
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
  event.preventDefault();

  if (input.value) {
    createTodo();
    input.value = "";
  }
});


