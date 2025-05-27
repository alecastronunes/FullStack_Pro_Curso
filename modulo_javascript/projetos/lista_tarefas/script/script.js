let inputElement = document.querySelector("#app input");
let listElement = document.querySelector("#app ul");
let buttonElement = document.querySelector("#app button");

let todoList = JSON.parse(localStorage.getItem("@todoList")) || [];

function renderTodo() {
  listElement.innerHTML = "";

  todoList.map((todo) => {
    // Cria os elementos e os adiciona dentro da <ul></ul>.
    let liElement = document.createElement("li");
    let textTodo = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    let position = todoList.indexOf(todo);

    linkElement.setAttribute("onclick", `deleteTodo(${position})`);

    listElement.appendChild(liElement);
    liElement.appendChild(textTodo);
    liElement.appendChild(linkElement);
  });
}

renderTodo();

function addTarefas() {
  if (inputElement.value === "") {
    alert("Digite alguma tarefa!!!");
    return false;
  } else {
    let newTodo = inputElement.value;
    todoList.push(newTodo);
    inputElement.value = "";
    renderTodo();
    saveData();
  }
}

buttonElement.onclick = addTarefas;

function deleteTodo(position) {
  todoList.splice(position, 1);
  renderTodo();
  saveData();
}

function saveData() {
  localStorage.setItem("@todoList", JSON.stringify(todoList));
}
