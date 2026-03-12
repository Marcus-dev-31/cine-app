import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {

  const [date, setDate] = useState(null);
  const [charge, setCharge] = useState(true);
  const [error, setError] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=es-ES&page=1`,
    )
      .then((res) => res.json())
      .then((res) => {
        setDate(res);
        setCharge(false);
      })
      .catch((error) => {
        console.error("Error Completo", error);
        setError("No se pudieron cargar las peliculas");
        setCharge(false);
      });
  }, []);

  if (charge) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h2>MovieDetail</h2>
      <h3>{date.title}</h3>
      <p>{date.overview}</p>
    </>
  );
};
