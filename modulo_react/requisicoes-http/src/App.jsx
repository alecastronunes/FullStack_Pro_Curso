import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      const url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json);
        });
    }

    loadApi();
  }, []);

  return (
    <div className="container">
      <header>React Nutri</header>

      {nutri.map((post) => {
        return (
          <article key={post.id} className="post">
            <strong className="titulo">{post.titulo}</strong>
            <img src={post.capa} alt={post.titulo} className="capa" />
            <p className="subtitulo">{post.subtitulo}</p>
            <a className="botao">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
