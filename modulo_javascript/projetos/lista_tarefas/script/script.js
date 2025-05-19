let inputElement = document.querySelector("#app input");
let listElement = document.querySelector("#app ul");
let buttonElement = document.querySelector("#app button");

let todoList = [];

function addTarefas() {
  if (inputElement.value === "") {
    alert("Digite alguma tarefa!!!");
    return false;
  } else {
    let newTodo = inputElement.value;
    todoList.push(newTodo);
    console.log(todoList);
  }
}

buttonElement.onclick = addTarefas;
