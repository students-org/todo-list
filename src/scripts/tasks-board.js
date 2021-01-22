import { TasksList } from './tasks-list';

export class TasksBoard {
  constructor({ rootEl, lists = [] }) {
    this.lists = lists.map((list) => new TasksList({ ...list, onChange: this.render.bind(this) }));
    this.rootEl = rootEl;

    this.init();
  }

  init() {
    this.render();
  }

  addList(list) {
    this.lists.push(new TasksList({ ...list, onChange: this.render.bind(this) }));
    this.render();
  }

  render() {
    this.rootEl.innerHTML = this.lists.map((list) => list.getHTML()).join('');
  }
}
