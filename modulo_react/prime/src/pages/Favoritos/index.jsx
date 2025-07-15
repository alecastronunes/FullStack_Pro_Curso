import { Link } from "react-router-dom";
import "./favoritos.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@catalogoFilmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(idFilmeDeletar) {
    const listaAtualizada = filmes.filter(
      (filme) => filme.id !== idFilmeDeletar
    );

    setFilmes(listaAtualizada);

    localStorage.setItem("@catalogoFilmes", JSON.stringify(listaAtualizada));

    toast.success("Filme excluído com sucesso!!!");
  }

  return (
    <div className="meus-filmes">
      <h1>Minha lista de Filmes Favoritos</h1>

      {filmes.length === 0 && (
        <span className="lista-vazia">Você não possui nenhum filme salvo :(</span>
      )}

      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <span>{filme.title}</span>
              <div>
                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
