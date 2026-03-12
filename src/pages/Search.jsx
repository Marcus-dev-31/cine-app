import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q");
  const navigate = useNavigate();
  
  const handleText = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/buscar?q=${inputValue}`);
  };

  

  useEffect(() => {

    if (!query) return;

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=es-ES&query=${query}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setDatos(res);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error Completo:", err);
        setError("No se pudieron cargar las peliculas");
        setCargando(false);
      })
  }, [query])

  
  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  

  return (
    <div>
      <p>Buscando: {query}</p>
      <input 
        type="text" 
        onChange={handleText} 
        value={inputValue}  
      />
      <button onClick={handleSearch}>buscar</button>

    <ul>
        {datos.results.map((d) => (
          <MovieCard
            key={d.id}
            id={d.id}
            poster={d.poster_path}
            title={d.title}
            vote = {d.vote_average}

          />
        ))}
      </ul>

    </div>
  );
};
