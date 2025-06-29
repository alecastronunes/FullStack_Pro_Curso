import { Link } from "react-router-dom";

function Erro() {
  return (
    <div>
      <h2>Ops!!! Parece que essa página não existe!</h2>
      <br />
      <br />
      <span>
        <i>Econtramos essas páginas aqui:</i>
      </span>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/Sobre">Sobre</Link>
      <br />
      <Link to="/Contato">Contato</Link>
    </div>
  );
}

export default Erro;
