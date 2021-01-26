import { TasksList } from './tasks-list';
import { ModalsProvider } from 'ui-modal';

export class TasksBoard {
  constructor({ rootEl, lists = [] }) {
    this.lists = lists.map((list) => new TasksList({ ...list, onChange: this.render.bind(this) }));
    this.rootEl = rootEl;

    this.init();
  }

  init() {
    this.catchEvents();
    this.render();
  }

  addList(list) {
    this.lists.push(new TasksList({ ...list, onChange: this.render.bind(this) }));
    this.render();
  }

  deleteTask(listID) {
    this.lists = this.lists.filter(({ id }) => id !== listID);
    this.render();
  }

  catchEvents() {
    document.addEventListener("submit", (event) => {
      event.preventDefault();

      const modalID = event.target.closest("[data-modal]").dataset.dataModal;

      if (modalID === this.id) {
        const input = event.target.querySelector("[name=name]");

        if (input?.value) {
          this.addList({
            name: input.value,
          });

          input.value = "";
        }
      }
    });

    document.addEventListener("click", (event) => {
      const deleteButtonEl = event.target.closest("[data-delete-btn]");

      if (deleteButtonEl) {
        this.deleteList(deleteButtonEl.closest("[data-tasks-list]").dataset.taskList);
      } 
    });
  }
  
  
  render() {
    this.rootEl.innerHTML = this.lists.map((list) => list.getHTML()).join('');
  }
}
