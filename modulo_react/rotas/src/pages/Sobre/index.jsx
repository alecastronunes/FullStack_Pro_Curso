import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div>
      <h1>Página sobre a empresa!!!</h1>
      <h2>Você está na página Sobre do Site.</h2>
      <br />
      <br />

      <Link to="/">Home</Link><br />
      <Link to="/Contato">Contato</Link>
    </div>
  );
}

export default Sobre;
