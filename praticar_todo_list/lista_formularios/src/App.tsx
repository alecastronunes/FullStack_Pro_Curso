import { useState, useEffect, useRef, useMemo } from "react";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true);

  const [todoInput, setTodoInput] = useState("");
  const [task, setTask] = useState<string[]>([]);

  const [editTask, setEditTask] = useState({
    enable: false,
    taskItem: "",
  });

  useEffect(() => {
    const todosSave = localStorage.getItem("@cursoreact");

    if (todosSave) {
      setTask(JSON.parse(todosSave));
    }
  }, []);

  // Salvando as tarefas no "localStorage" todas as vezes em que a lista sofrer alguma alteração.
  useEffect(() => {
    // Na primeira vez que o componente for renderizado, o "firstRender" entra no if e seu valor é atualizado para "false".
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // Salvando no localStorage
    localStorage.setItem("@cursoreact", JSON.stringify(task));
    console.log("O useEffect foi chamado!!!");
  }, [task]);

  const todoCounter = useMemo(() => {
    return task.length;
  }, [task]);

  function handleTask() {
    if (!todoInput) {
      alert("Informe uma tarefa!!!");
      return;
    } else if (editTask.enable) {
      handleSaveEdit();
      return;
    } else {
      setTask((tasks) => [...tasks, todoInput]);
      setTodoInput("");
    }
  }

  function handleDelete(item: string) {
    const taskRemove = task.filter((todo) => todo !== item);

    // Atualiza a lista
    setTask(taskRemove);
  }

  function handleEdit(item: string) {
    inputRef.current?.focus();

    setTodoInput(item);
    setEditTask({
      enable: true,
      taskItem: item,
    });
  }

  function handleSaveEdit() {
    const findItemTask = task.findIndex(
      (actualyTasks) => actualyTasks === editTask.taskItem
    );

    const allTasks = [...task];

    allTasks[findItemTask] = todoInput;
    setTask(allTasks);

    setEditTask({
      enable: false,
      taskItem: "",
    });
    setTodoInput("");
  }
  return (
    <div>
      <h1>Lista de tarefas</h1>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        ref={inputRef}
      />
      {/* Troca o texto do botão conforme a condição */}
      <button onClick={handleTask}>
        {editTask.enable ? "Atualizar tarefa" : "Adicionar tarefa"}
      </button>
      <hr />
      <strong>Você tem {todoCounter} tarefa(s)</strong>
      {task.map((item, index) => (
        <section key={index}>
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => handleDelete(item)}>Excluir</button>
        </section>
      ))}
    </div>
  );
}

export default App;
