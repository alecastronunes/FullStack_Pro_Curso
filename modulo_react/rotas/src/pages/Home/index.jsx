import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem vindo a página HOME!!!</h1>
      <h2>Você está na Home do Site.</h2>
      <br />
      <br />

      <Link to="/Sobre">Sobre</Link>
      <br />
      <Link to="/Contato">Contato</Link>
      <hr />
      <Link to="/Produto/2345678">Acessar produto - Biscoito</Link>
    </div>
  );
}

export default Home;
