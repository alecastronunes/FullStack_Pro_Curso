// Style
import "./App.css";

import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  // Um array de strings, onde cada string é uma linha da tabuada.
  const [resultTabooed, setResultTabooed] = useState<string[]>([]);

  function handleTabuada() {
    const inputNumber = parseInt(input);

    if (isNaN(inputNumber)) {
      setResultTabooed(["Por favor, digite um número válido!!!"]);
      return;
    }

    const results: string[] = [];

    for (let i = 1; i <= 10; i++) {
      const result = inputNumber * i;
      results.push(`${inputNumber} X ${i} = ${result}`);
    }

    // Atualiza o estado do componente.
    setResultTabooed(results)
  }

  return (
    <div className="container">
      <h1>
        <i>Faça sua tabuada</i>
      </h1>
      <input
        placeholder="Digite um número"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleTabuada}>Criar</button>
      <ul className="tabooedNumbers">
        {resultTabooed.map((line, index) => (
          <li key={index}>
            <strong>{line}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
