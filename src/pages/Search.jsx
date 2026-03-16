import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import styles from "./Search.module.css";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(false);
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
    setCargando(true);

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
      });
  }, [query]);

  return (
    <div className={styles.container}>

      <div className={styles.searchBar}>
        <input 
          type="text" 
          onChange={handleText} 
          value={inputValue} 
          className={styles.input} 
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
        />
        <button 
          onClick={handleSearch}
          className={styles.button}
        >Buscar</button>
      </div>
      

      {cargando && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      <ul className={styles.grid}>
        {datos.results?.map((d) => (
          <MovieCard
            key={d.id}
            id={d.id}
            poster={d.poster_path}
            title={d.title}
            vote={d.vote_average}
          />
        ))}
      </ul>
    </div>
  );
};
