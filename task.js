export default function Task ({ name = '' }){
  this.name = name;
}

Task.prototype.getHTML = function(){
  return `
    <li data-list-item class="todo-list__item"> 
      <span class="todo-list__text">${this.name}</span> 

      <button data-button class="btn">
        <i class="fas fa-trash-alt"></i>
      </button> 
    </li>
  `;
};