let inputElement = document.querySelector("#app input");
let listElement = document.querySelector("#app ul");
let buttonElement = document.querySelector("#app button");

let todoList = [];

function renderTodo() {
  listElement.innerHTML = "";

  todoList.map((todo) => {
    // Cria os elementos e os adiciona dentro da <ul></ul>.
    let liElement = document.createElement("li");
    let textTodo = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let position = todoList.indexOf(todo);

    linkElement.setAttribute("onclick", `deleteTodo(${position})`);

    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    listElement.appendChild(liElement);
    liElement.appendChild(textTodo);
    liElement.appendChild(linkElement);
  });
}

function addTarefas() {
  if (inputElement.value === "") {
    alert("Digite alguma tarefa!!!");
    return false;
  } else {
    let newTodo = inputElement.value;
    todoList.push(newTodo);
    inputElement.value = "";
    renderTodo();
  }
}

buttonElement.onclick = addTarefas;

function deleteTodo(position) {
  todoList.splice(position, 1);
  renderTodo();
}
