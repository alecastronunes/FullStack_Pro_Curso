import { Link } from "react-router-dom";
import "./erro.css";

function Erro() {
  return (
    <div className="not-found">
      <h1>Erro 404!</h1>
      <h2>Página não encontrada!!!</h2>
      <Link to="/">Confira todos os filmes</Link>
    </div>
  );
}

export default Erro;
