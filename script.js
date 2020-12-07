
	const input = document.querySelector(".todo-input"),
  ul = document.querySelector("ul.todo-list"),
  btn = document.querySelector(".todo-btn"),
  form = document.querySelector(".todo");

function createTodo() {
const li = document.createElement("li"),
    newTodo = input.value;

li.innerHTML =` <li class="todo-list-item"> 

  <span class="todo-list-item-text">${newTodo}</span> 

  <button class="todo-list-item-trash">
  <i class="fas fa-trash-alt"></i>
  </button> 

</li>`;

input.value = "";
listenDeleteTodo(button);

}

function listenDeleteTodo(element) {
element.addEventListener("click", (event) => {
element.parentElement.remove();
event.stopPropagation();
});
}

form.addEventListener("submit", (event) => {
event.preventDefault();
if (input.value) {
createTodo();
}
});


