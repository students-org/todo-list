export default class Task {
  constructor({ name = '' }){
    this.name = name;
  }
  
  getHTML(){
    return `
      <li data-list-item class="todo-list__item"> 
        <input class="todo-form__checkbox" data-checkbox type="checkbox">
        <span class="todo-list__text">${this.name}</span> 
        <button data-button class="btn">
          <i class="fas fa-trash-alt"></i>
        </button> 
      </li>
    `;
  }
}