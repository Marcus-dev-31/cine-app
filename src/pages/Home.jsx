import { useState, useEffect } from "react";

export const Home = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=es-ES&page=1`,
    )
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        setDatos(resultado);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error completo:", error);
        setError("No se pudieron cargar las películas");
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>Home</h1>
      <ul>
        {datos.results.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </>
  );
};
