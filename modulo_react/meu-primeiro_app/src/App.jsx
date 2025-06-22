import { useState, useEffect } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefa");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleTodo(e) {
    
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Lista de tarefa:</h1>

      <form onSubmit={handleTodo}>
        <label>Tarefa </label>
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Registrar tarefa</button>
      </form>

      <br />
      <br />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
