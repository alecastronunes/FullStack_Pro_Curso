import { Link } from "react-router-dom";

function Contato() {
  return (
    <div>
      <h1>Bem vindo(a) a página de contato</h1>
      <h2>Contato da empresa (dd) XXXX-XXXX</h2>
      <br />
      <br />

      <Link to="/">Home</Link>
      <br />
      <Link to="/Sobre">Sobre</Link>
    </div>
  );
}

export default Contato;
