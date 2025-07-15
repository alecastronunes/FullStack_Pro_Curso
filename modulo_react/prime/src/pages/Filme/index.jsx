import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./filme-info.css";
import api from "../../services/api";
import { toast } from "react-toastify";

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "d1935d4ecbfde00c6313ff29ddc738bf",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }

    loadFilme();

    return () => {
      console.log("O componente foi desmontado!!!");
    };
  }, [navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@catalogoFilmes");
    let filmesSalvos = JSON.parse(minhaLista) || [];
    let existeFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id == filme.id
    );

    if (existeFilme) {
      toast.warn("Este filme já está na sua lista!!!");
      return;
    } else {
      filmesSalvos.push(filme);
      localStorage.setItem("@catalogoFilmes", JSON.stringify(filmesSalvos));
      toast.success("Filme salvo com sucesso!!!");
    }
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} /10</strong>

      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="_blank"
            rel="external"
            href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
