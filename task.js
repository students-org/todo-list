export default class Task {
  constructor(options){
    this.tasks = options.tasks;
    this.getHTML = options.getHTML;
    this.ul = options.ul;
  }
  
  render(){
    this.ul.insertAdjacentHTML("afterbegin", this.getHTML(this.tasks));
    console.log(task)
  }

  
}